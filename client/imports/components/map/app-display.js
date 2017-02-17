import React,{Component,PropTypes} from "react";
import MainWgt from "./main-wgt";

class AppDisplay extends Component{
  
  render(){
    let options = {sort:{ID:1}};
    return <MainWgt 
              sourceId={this.props.cameraSourceId}
              options={options}
              timeData = {this.props.cameraData}
            />
  }
}
AppDisplay.propTypes={
  cameraData:PropTypes.array
}

export default AppDisplay;