
import {Meteor} from "meteor/meteor";
import {DDP} from "meteor/ddp";
import {HTTP} from "meteor/http";
import {ReactiveVar} from "meteor/reactive-var";

// This class manages a DDP connection to a remote TDX DDP server.
// The address of the remote server must be specified in the ddpServerURL property of the meteor settings file (settings.json)
class ConnectionManager {
  constructor() {
    this.connected = false;
    this.authenticated = new ReactiveVar(false);
    this.resourceCollection = this.datasetDataCollection = null;
    this.authToken = "";
  }
  connect() {
    if (this.connected) {
      return true;
    }
    // Create the DDP channel.
    this._connection = DDP.connect(Meteor.settings.public.ddpServerURL);
    if (this._connection) {
      console.log("connected to %s", Meteor.settings.public.ddpServerURL);
      this.connected = true;

      return true;
    } else {
      console.log("failed to create ddp connection to %s", Meteor.settings.ddpServerURL);
      return false;
    }
  }
  useToken(token) {
    var self = this;

    // Call the TDX server, passing our auth token.
    this._connection.call("/app/jwtAuth", token, function (err, result) {
      if (err) {
        console.log("ddpConnection auth error: " + err.message);
      } else {
        console.log("ddpConnection auth result: " + result);

        self.authToken = token;
        self._connection.setUserId(result);

        // Initialise collections
        self.resourceCollection = new Mongo.Collection("AS.Resource", { connection: self._connection });
        self.datasetDataCollection = new Mongo.Collection("DatasetData", { connection: self._connection });

        // Successfully authenticated - update the reactive variable.
        self.authenticated.set(true);
      }
    });
  }
  authorise(shareId, password) {
    var self = this;

    // Make sure we have a ddp connection.
    this.connect();

    // Initialise the HTTP request with the given credentials
    var options = {
      headers: {
        authorization: "Basic " + shareId + ":" + password },
        data: {
          grant_type: "client_credentials",
        }
    };

    // Get an auth token from the TDX token endpoint.
    HTTP.post(Meteor.settings.public.authServerURL + "/token", options, function(err, result) {
      if (err) {
        console.log("failed to get auth token: " + err.message);
      } else {
        // Have a valid auth token - now try and authenticate the DDP channel
        self.useToken(result.data.access_token);
      }
    });
  }
  logout() {
    // Disconnect connection and reset.
    this._connection.disconnect();
    this.connected = false;
    this._connection = null;
    this.resourceCollection = this.datasetDataCollection = null;
    this.authToken = "";
    this.authenticated.set(false);
  }
  subscribe() {
    // Pass on to the connection subscribe call.
    return this._connection.subscribe.apply(this._connection, arguments);
  }
}

const singleton = new ConnectionManager();
export default singleton;
