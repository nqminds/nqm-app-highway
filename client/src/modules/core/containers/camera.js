import {compose, merge, promiseFactory, reduxFactory, useDeps} from "@nqminds/nqm-tdx-client";
import Component from "../components/camera";

const dataMapper = ({
  camera,
}) => {
  console.log(camera);
  const headers = {
    Referer: `http://public.highwaystrafficcameras.co.uk/cctvpublicaccess/html/${camera}.html`,
    "Content-Type": "image/jpeg",
    "X-Content-Type-Options": "nosniff"
  };
  const url = `http://public.highwaystrafficcameras.co.uk/cctvpublicaccess/images/${camera}.jpg?sid=${Math.random()}`;

  return fetch(url, {headers, mode: "no-cors"})
    .then((response) => response.blob())
    .then((blob) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve({image: event.target.result});
        };
        reader.readAsDataURL(blob);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const reduxMapper = (state) => {
  return {
    camera: state.core.camera,
  };
};

const depsMapper = ({constants, store, tdxConnections}, actions) => {
  return {
    store,
  };
};

export default merge(
  compose(promiseFactory(dataMapper), {propsToWatch: ["camera"]}),
  compose(reduxFactory(reduxMapper)),
  useDeps(depsMapper),
)(Component);
