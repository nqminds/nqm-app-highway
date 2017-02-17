import {Meteor} from "meteor/meteor";
import injectTapEventPlugin from "react-tap-event-plugin";

Meteor.startup(function() {
  // Enable onTouchTap event.
  injectTapEventPlugin();
});
