import {compose, merge, promiseFactory, useDeps} from "@nqminds/nqm-tdx-client";
import Component from "../components/home";
import data from "./data";
const dataMapper = ({
  camera,
  connectionManager,
  datasetId,
}) => {
  const api = connectionManager.tdxApi;
  /*return api.getData(datasetId, null, null, {limit: 0})
    .then(({data}) => {
      return {data};
    });*/
  return {data};
};

const depsMapper = ({constants, store, tdxConnections}, actions) => {
  return {
    connectionManager: tdxConnections.defaultTDX,
    datasetId: constants.datasetId,
    leafletKey: constants.leafletKey,
    leafletUser: constants.leafletUser,
    setCamera: actions.core.setCamera,
    store,
  };
};

export default merge(
  compose(promiseFactory(dataMapper), {propsToWatch: ["constants"]}),
  useDeps(depsMapper),
)(Component);
