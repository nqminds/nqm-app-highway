/**
 * An example landing page
 */
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

// internal
import {ContentMain} from "./page-components";
import Camera from "../containers/camera";

import {Map, Marker, Popup, TileLayer, GeoJSON} from "react-leaflet";

import {withStyles} from "@material-ui/core/styles";
const styleSheet = () => {
  return {
    camImage: {
      position: "absolute",
      border: "2px solid #000",
      zIndex: 10000,
    },
    content: {
      textAlign: "justify",
      width: "100%",
    },
  };
};

class Home extends React.Component {
  state = {
    lat: 52.935,
    lng: -1.624,
    zoom: 7,
  }

  handleClick = (feature) => {
    const {setCamera} = this.props;
    setCamera(feature.properties.id);
  }

  render() {
    const {classes, data, leafletKey, leafletUser} = this.props;
    const position = [this.state.lat, this.state.lng];
    const url = `https://api.mapbox.com/styles/v1/${leafletUser}/cj4dz19rw1vn42rny5p7wvvx2/tiles/256/{z}/{x}/{y}?access_token=${leafletKey}`;
    
    const markers = _.map(data, (d) => {
      return (
        <Marker
          key={d.properties.id}
          onClick={() => {
            this.handleClick(d);
          }}
          position={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
        >
          <Popup>
            <p>{d.properties.description}</p>
          </Popup>
        </Marker>
      );
    });

    return (
      <div className={classes.content}>
        <div className={classes.camImage}>
          <Camera />
        </div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url={url}
          />
          {markers}
        </Map>
      </div>
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
