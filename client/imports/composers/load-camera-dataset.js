import connectionManager from "../../connection-manager";
import TDXApi from "nqm-api-tdx/client-api";
import {Meteor} from "meteor/meteor";
var _=lodash;

function loadCarmeraDataset({sourceId}, onData) {
  const config = {
    commandHost: Meteor.settings.public.commandHost,
    queryHost: Meteor.settings.public.queryHost,
    accessToken: connectionManager.authToken
  };
  console.log(sourceId);
  const api = new TDXApi(config);

  api.getDatasetData(sourceId, null, null, null, (err, response) => {
    if(err)
      throw err;
    else{
      console.log(response.data);
      onData(null,{cameraData:response.data})
    }
  });
}

export default loadCarmeraDataset;
