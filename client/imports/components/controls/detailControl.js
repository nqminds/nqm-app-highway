import React, { Component, PropTypes } from 'react';
import Paper from "material-ui/Paper";

class DetailControl extends Component{
  constructor(props){
    super(props);
    this.state={
      src:this.props.src
    }
  }

  render(){

    return(
      <div id="details">
        <span>
          <img width="100%" src={"data:image/png;base64,"+this.props.src}></img>
        </span>
        <h4>Latitude:{this.props.LatLng["lat"]}</h4>
        <h4>Longitude: {this.props.LatLng["lng"]}</h4>
      </div>
    )
  }
}
DetailControl.propTypes={
  src:PropTypes.string,
  LatLng:PropTypes.object
}
export default DetailControl;
