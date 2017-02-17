import React,{Component,PropTypes} from "react";
import { Meteor } from "meteor/meteor";

import AppContainer from "./app-container";
import Paper from "material-ui/Paper";

class AppWidget extends Component{
  render(){
    let options = {sort:{ID:1}};
    return <AppContainer
            sourceId={this.props.sourceId}
            cameraSourceId={this.props.cameraSourceId}
            options={options}
          />
  }
}
AppWidget.propTypes={
  sourceId:PropTypes.string.isRequired,
  cameraSourceId:PropTypes.string.isRequired
}

export default AppWidget;