import React,{PropTypes} from "react";
import ReactDOM from 'react-dom';
import {MapLayer} from "react-leaflet";

let _=lodash;
class MarkerCluster extends MapLayer{
  constructor(props){
    super(props);
    this._markers = {};

    this.mountMarkers = this.mountMarkers.bind(this);
  }

  _handleClick(event){
    console.log("markercluster click");
    this.props.onClick();
  }
  mountMarkers(timeData){
    console.log(timeData[0]["timestamp"]);
    let markers = [];
    this.leafletElement = L.markerClusterGroup();
    var cssIcon = L.divIcon({
        className: 'css-icon'
    });
    markers = _.map(this.props.data,(val,i) => {
      var srcStr = val.src.trim()+"?timestamp="+timeData[i]["timestamp"];
      var popup ='<span><img width="240" height="200" src='+srcStr+'></img></span>';
      this._markers[Number(val.ID)] = L.marker(new L.LatLng(val.latitude,val.longitude),{
        title:val.src,
        id:i
      });
      this._markers[Number(val.ID)].bindPopup(popup).on('click',(e) => {this._handleClick});
      return this._markers[Number(val.ID)];
    });
    this.leafletElement.addLayers(markers);
  }

  componentWillMount(){
    this.mountMarkers(this.props.timeData);
  }
  componentWillReceiveProps(nextProps){
    _.forEach(nextProps.data,(val,i) => {
      var srcStr = val.src.trim()+"?timestamp="+nextProps.timeData[i]["timestamp"];
      var popup ='<span><img width="240" height="200" src='+srcStr+'></img></span>';
      this._markers[Number(val.ID)].bindPopup(popup).on('click',(e) => {this._handleClick});
    });
  }
  shouldComponentUpdate() {
      return false;
  }

  render(){
    return null;
  }
}

MarkerCluster.propTypes={
  data: PropTypes.array,
  onClick: PropTypes.func
}

export default MarkerCluster;
