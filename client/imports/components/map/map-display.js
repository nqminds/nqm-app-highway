import React,{Component,PropTypes}from "react";
import ReactDom from "react-dom";
import Paper from "material-ui/Paper";
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer,Polygon,Polyline,Rectangle} from 'react-leaflet';
import MarkerCluster from "./marker-cluster";
import Control from './react-leaflet-control';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CircularProgress from 'material-ui/CircularProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';


let _=lodash;
const centerPo = [50.92089,-1.1];
class MapDisplay extends Component{

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state={
      completed:"hide"
    }
  }
  // componentDidUpdate() {
  //   this.setState({
  //     completed:"hide"
  //   })
  // }
  componentWillReceiveProps(){
    this.setState({
      completed:"loading"
    })
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }
  _handleClick(event){
    console.log("map marker clicked");
    console.log(event.target);
  }

  renderMap(){
    var lanlngList = [];
    const style = {
      refresh: {
        display: 'inline-block',
        position: 'relative',
      }
    };
    return(
      <Map center={centerPo} zoom={10} scrollWheelZoom={false} touchZoom={false}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerCluster
          data={this.props.cameraData}
          timeData={this.props.timeData}
          onClick={this._handleClick}
        />
        <Control position="topleft" >
          <div className="progress-bar">
            <MuiThemeProvider>
              <RefreshIndicator
                size={40}
                left={10}
                top={0}
                status={this.state.completed}
                style={style.refresh}
              />
            </MuiThemeProvider>
          </div>
        </Control>
      </Map>
    )
  }
  render(){
    return(
        <div id="main-map" hidden={this.props.mapView}>
          {this.renderMap()}
        </div>
    )
  }
}

MapDisplay.propTypes={
  cameraData:PropTypes.array.isRequired,
  timeData:PropTypes.array.isRequired,
  onDataChange:PropTypes.func
}

MapDisplay.contextTypes = {
  muiTheme: React.PropTypes.object
};

export default MapDisplay;
