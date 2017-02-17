import React,{Component,Prototype} from 'react'
import {Meteor} from 'meteor/meteor';
import Paper from "material-ui/Paper";
import AppWidget from "./map/app-wgt";


class VisualExplorer extends Component{
  render(){
    return(
      <div className="container">
        <AppWidget
          cameraSourceId={Meteor.settings.public.resourceId}
          sourceId={Meteor.settings.public.cameraLiveId}
        />
      </div>
    )
  }
}
export default VisualExplorer;
