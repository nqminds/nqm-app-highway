import React from "react";
import {MapLayer} from "react-leaflet";
import _ from "lodash";

require("leaflet.markercluster");

class MarkerCluster extends MapLayer {

  constructor(props) {
    super(props);

    this.leafletElement = L.markerClusterGroup();
    this.showMarkers = this.showMarkers.bind(this);
  }

  componentWillMount() {
    this.showMarkers(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.showMarkers(nextProps);
  }

  showMarkers(props) {
    this.leafletElement.clearLayers();
    const markers = _.map(props.data, (marker, i) => {
      const srcStr = `${marker.src.trim()}?timestamp=${props.timeData[i].timestamp}`;
      const popup = `<span><img width="240" height="200" src="${srcStr}"></img></span>`;
      const leafletMarker = L.marker(new L.LatLng(marker.latitude, marker.longitude), {
        title: marker.src,
        id: i,
      });
      leafletMarker.on("click", this.props.onClick);

      leafletMarker.bindPopup(popup);

      return leafletMarker;
    });

    this.leafletElement.addLayers(markers);
  }
}

MarkerCluster.propTypes = {
  data: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default MarkerCluster;
