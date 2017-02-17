import { Meteor } from 'meteor/meteor';
import {HTTP} from "meteor/http";
import Promise from "bluebird";
import request from "request";

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
    "getBase64String":function(folderName,fileIndex){
      var getURL = Meteor.settings.public.apiURL+"img/"+folderName+"/"+fileIndex;
      console.log(getURL);
      var options = {
                      headers: 
                        {
                          'Content-Type': 'image/gif',
                          "User-Agent": "Meteor/1.0"
                        },
                      npmRequestOptions: {
                          encoding: "base64"
                        }
                    }
      Promise.promisifyAll(HTTP);
      return HTTP.callAsync("GET",getURL,options)
        .then((response) => {
          console.log("meteor server response");
          //console.log(response);
          return response.content;
        })
        .catch((err) => {
          console.log("meteor server error");
          console.log(err);
          return err;
        })
    },
    "getTimestamp":function(folderName,fileIndex){
      var getURL = Meteor.settings.public.apiURL+"id/"+folderName+"/"+fileIndex;
      var options = {
                      headers: 
                        {
                          'Content-Type': 'application/json',
                          "User-Agent": "Meteor/1.0"
                        },
                      npmRequestOptions: {
                          encoding: "utf-8"
                        }
                    }
      console.log(getURL);
      Promise.promisifyAll(HTTP);
      return HTTP.callAsync("GET",getURL,options)
        .then((response) => {
          console.log("meteor server response timestamp");
          //console.log(response);
          return response.content;
        })
        .catch((err) => {
          console.log("meteor server error timestamp");
          return err;
        })
    }
  })
});
