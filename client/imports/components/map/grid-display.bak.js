import React,{Component,PropTypes}from "react";
import ReactDom from "react-dom";
import Paper from "material-ui/Paper";
import DetailControl from "../controls/detailControl";
import Slider from 'material-ui/Slider';
import { Meteor } from "meteor/meteor";
import {GridList, GridTile} from "material-ui/GridList";
import IconButton from 'material-ui/IconButton';

var _=lodash;
class GridDisplay extends Component{

  constructor(props) {
    super(props);
    this.state={
      timestampArray:new Array(128).fill(0),
      currentBase64String:""
    }
    this._handleSlider = this._handleSlider.bind(this);
  }
  _handleHTTPcalls(folderName,fileIndex){
    Meteor.call("getBase64String",folderName,fileIndex,(err,response) => {
      if(err)
        console.log(err);
      else{
        //console.log(response);
        if(response == "NO IMAGE"){}else{
          response = JSON.parse(response);
          if(response.base64String.data.length>0){
            document.getElementById("main-img"+folderName).src = "data:image/png;base64,"+new Buffer(response.base64String.data).toString("base64");
            document.getElementById("img-timestamp"+folderName).innerHTML = new Date(response.timestamp).toUTCString();
          }
        }
      }
    })
  }
  _handleSlider(event,value){

    var index;
    var target = event.target;
    if(target.nextSibling.getAttribute("name") != null){
      index = String(target.nextSibling.getAttribute("name")).replace("slider","");
    }else if(event.target.parentNode.parentNode.nextSibling != null){
      index = String(event.target.parentNode.parentNode.nextSibling.getAttribute("name")).replace("slider","");
    }else{
      index = String(event.target.getAttribute("id")).replace("flex-img","");
    }
    console.log(index);

    var cloneArray = this.state.timestampArray.slice(0);
    cloneArray[Number(index)] = value;
    this.setState({
      timestampArray:cloneArray
    });
    console.log(index);
    console.log(value)
    this._handleHTTPcalls(index,(10-value));
  }
  render(){

    const iconStyle = {
      color:"white"
    }
 
    let imgs =_.map(this.props.cameraData,(val,i) => {
          return(
            <GridTile
              key={val.ID}
              title={this.props.sliderTime.toUTCString()}
              actionIcon={<IconButton iconClassName="material-icons md-light" iconStyle={iconStyle}>navigate_next</IconButton>}
              actionIcon={<IconButton iconClassName="material-icons md-light" iconStyle={iconStyle}>navigate_before</IconButton>}
            >
              <img width="100%" src={val.src.trim()+"?timestamp="+this.props.sliderTime.getTime()} id={"main-img"+val.ID}/>
            </GridTile>
          )
        });

    return(
        <Paper className="flex-items" id="main-grid">
          <div className="flex-container">
            {imgs}
          </div>
        </Paper>
    )
  }
}
GridDisplay.propTypes={
  cameraData:PropTypes.array,
  onPicture: PropTypes.func
}

export default GridDisplay;
