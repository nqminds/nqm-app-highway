import connectionManager from "../../connection-manager";

// Loads data for a given resource id from the TDX.
// filter - an optional query filter to refine the returned data, e.g. {temperature: {$gt: 20}}
// options - options to tweak the returned data, e.g. { sort: { timestamp: -1 }, limit: 10, fields: {temperature: 1}} will sort by timestamp descending, limit the result to 10 items, and only return the temperature field in each document.
function loadResourceData({sourceId, filter, options,subId}, onData) {
  //console.log("loadResourceData: ", sourceId, filter, options);

  // Subscribe to the datasetData publication using the given filter and options.
  // The subscription will automatically re-run if any of the parameters change (i.e. resourceId, filter or options).
  const sub = connectionManager.subscribe("datasetData",sourceId,filter,options, {
    onError(err) {
      console.log("error subscribing to datasetData: " + err.message+" with resourceId="+sourceId);
    }}
  );


  if (sub.ready()) {
    // The subscription is ready
    filter = filter || {};
    // Add filter for dataset data (all datasetData subscriptions are stored in the same collection).
    filter._d = sourceId;
    // Fetch the data from the local cache.
    const datasetData = connectionManager.datasetDataCollection.find(filter,options).fetch();
    //console.log(datasetData);
    // Pass the data on to the component via the data property.
    onData(null, {cameraData: datasetData});
  }
}

export default loadResourceData;
