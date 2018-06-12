import {compose, merge, promiseFactory, reduxFactory, useDeps} from "@nqminds/nqm-tdx-client";
import Component from "../components/camera";

const dataMapper = ({
  camera,
}) => {
  return fetch(`/camera/${camera}`)
    .then((response) => {
      return response.json();
    });
};

const reduxMapper = (state) => {
  return {
    camera: state.core.camera,
  };
};

const depsMapper = ({store}, actions) => {
  return {
    store,
  };
};

export default merge(
  compose(promiseFactory(dataMapper), {propsToWatch: ["camera"]}),
  compose(reduxFactory(reduxMapper)),
  useDeps(depsMapper),
)(Component);
