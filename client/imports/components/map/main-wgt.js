import React,{Component,PropTypes} from "react";
import { Meteor } from "meteor/meteor";

import MainContainer from "./main-container";
import Paper from "material-ui/Paper";


class MainWidget extends Component{
  render(){
    return <MainContainer
            sourceId={this.props.sourceId}
            options={this.props.options}
            timeData = {this.props.timeData}
          />
  }
}
MainWidget.propTypes={
  sourceId:PropTypes.string.isRequired,
  options:PropTypes.object,
  timeData:PropTypes.array
}

export default MainWidget;
