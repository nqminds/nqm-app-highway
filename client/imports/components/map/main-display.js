import MapDisplay from "./map-display";
import GridDisplay from "./grid-display";
import React,{Component,PropTypes} from "react";
import DetailControl from "../controls/detailControl";
import ReactDom from "react-dom";
import Paper from "material-ui/Paper";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Meteor} from "meteor/meteor";

class MainDisplay extends Component{

  constructor(props){
    super(props);
    this.state={
      currentTime:this.props.timeData[0]["timestamp"],
      indexArray: new Array(128).fill(this.props.timeData[0]["DictIndex"]),
      currentSrc:"",
      currentLatLng:{},
      updateState:true,
      mapDisplay:true,
      gridDisplay:false,
      disableBeforeArray:null,
      disableNextArray: null
    }
    this._switchView = this._switchView.bind(this);
    this._changeStateIndex = this._changeStateIndex.bind(this);
    this._checkStateIndex = this._checkStateIndex.bind(this);
  }

  _switchView(){
    if(this.state.mapDisplay == true){
      this.setState({
        mapDisplay:false,
        gridDisplay:true,
        currentTime:this.props.timeData[0]["timestamp"]
      })
    }else{
      this.setState({
        mapDisplay:true,
        gridDisplay:false
      })
    }
  }
  _checkStateIndex(){
    var newBeforeArray = _.map(this.state.indexArray,(val) => {
      return val>0?false:true;
    });
    var newNextArray = _.map(this.state.indexArray,(val) =>{
      return val<this.props.timeData[0]['DictIndex']?false:true;
    });
    this.setState({
      disableBeforeArray: newBeforeArray,
      disableNextArray: newNextArray
    })
  }
  _changeStateIndex(indexArray){
    this.setState({
      indexArray: indexArray
    });
    this._checkStateIndex();
  }

  componentWillMount(){
    this.setState({
      currentTime: this.props.timeData[0]["timestamp"]
    });
    this._checkStateIndex();
  }

  componentWillReceiveProps(nextProps){
    if(this.state.gridDisplay == false && this.state.mapDisplay == true){
      this.setState({
        currentTime: this.props.timeData[0]["timestamp"],
        indexArray: this.state.indexArray.fill(this.props.timeData[0]["DictIndex"])
      });
    }else{
      var newIndexArray = _.map(this.state.indexArray,(val) => {
        return (val-1)>0?(val-1):0
      })
      this.setState({
        indexArray: newIndexArray
      })
    }
    this._checkStateIndex();
  }


  render(){
    const appBarHeight = Meteor.settings.public.showAppBar !== false ? 50 : 0;
    const leftPanelWidth = 170;
    const styles = {
      root: {
        height: "100%"
      },
      mainPanel: {
        position: "absolute",        
        top: appBarHeight,
        bottom: 0,
        left: 0,
        right: 0
      },
      leftPanel: {
        background: "white",
        position: "fixed",
        top: appBarHeight,
        bottom: 0,
        width: leftPanelWidth
      }
    };
    let mapDisplay, gridDisplay = null;
    if(this.state.mapDisplay == true){
      mapDisplay = (<MapDisplay cameraData={this.props.cameraData} timeData={this.props.timeData}/>);
    }
    if(this.state.gridDisplay == true){
      gridDisplay = (<GridDisplay 
                        cameraData={this.props.cameraData} 
                        currentTime={this.state.currentTime} 
                        imgLength={this.props.timeData[0]["DictIndex"]}
                        indexArray={this.state.indexArray}
                        changeStateIndex={this._changeStateIndex}
                        disableBeforeArray={this.state.disableBeforeArray}
                        disableNextArray = {this.state.disableNextArray}
                    />);
    }
    return(
        <div style={styles.root}>
          <div style={styles.mainPanel}>
            {mapDisplay}
            {gridDisplay}
          </div>
          <div id="floating-btn">
            <FloatingActionButton>
              <FontIcon className="material-icons switch-view" onTouchTap={this._switchView}>view_comfy</FontIcon>
            </FloatingActionButton>
          </div>
        </div>
        
    );
  }
}

MainDisplay.propTypes={
  cameraData: PropTypes.array,
}

export default MainDisplay;