/**
 * An example landing page
 */
import React from "react";
import PropTypes from "prop-types";

// internal
import {ContentMain} from "./page-components";
import Camera from "../containers/camera";

import {Map, TileLayer, GeoJSON} from "react-leaflet";

import {withStyles} from "@material-ui/core/styles";
const styleSheet = () => {
  return {
    content: {
      textAlign: "justify",
    },
  };
};

class Home extends React.Component {
  state = {
    lat: 52.935,
    lng: -1.624,
    zoom: 7,
  }

  handleClick = (id) => {
    const {setCamera} = this.props;
    setCamera(id);
  }

  render() {
    const {classes, data, leafletKey, leafletUser} = this.props;
    const position = [this.state.lat, this.state.lng];
    const url = `https://api.mapbox.com/styles/v1/${leafletUser}/cj4dz19rw1vn42rny5p7wvvx2/tiles/256/{z}/{x}/{y}?access_token=${leafletKey}`;
    return (
      <ContentMain className={classes.content}>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url={url}
          />
          <GeoJSON
            data={{
              type: "FeatureCollection",
              features: data,
            }}
            onEachFeature={(feature, layer) => {
              layer.on({
                click: (evt) => {
                  this.handleClick(evt.target.feature.properties.id);
                },
              });
            }}
          />
        </Map>
        <Camera />
      </ContentMain>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  leafletKey: PropTypes.string.isRequired,
  leafletUser: PropTypes.string.isRequired,
};

export default withStyles(styleSheet, {name: "nqm-home"})(Home);
