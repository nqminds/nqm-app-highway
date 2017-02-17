import React,{Component} from "react";
import {Meteor} from "meteor/meteor";

import connectionManager from "../../connection-manager";
import Login from "./login";

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const muiTheme = getMuiTheme({
  avatar: {
    borderColor: null,
  },
  userAgent: navigator.userAgent,
  appBar: {
    height: 50,
  },
});

class Layout extends React.Component{
  constructor(props) {
    super(props);   

    // Bind event handlers to "this"
    this._onLogout = this._onLogout.bind(this);
    this._onUserPassword = this._onUserPassword.bind(this);
  }

  getChildContext() { 
    return {
      muiTheme: muiTheme
    };
  }

  _onUserPassword(user, password) {
    // Pass share credentials on to the connection manager.
    connectionManager.authorise(user, password);
  }

  _onLogout() {
    FlowRouter.go("logout");
  }

  _onSettings() {
    FlowRouter.go("settings");
  }

  render() {
    var styles = {
      appBar: {
        position: "fixed"
      },
      userAgent: navigator.userAgent,
      layoutContent: {
        padding: "68px 0px 0px 5px"
      }
    };

    var content;
    var menuButton;

    // Render different content depending on whether authenticated or not.
    if (this.props.authenticated) {
      // Authenticated => render the layout content provided by the router.
      content = this.props.content();

      // Add a logout button to the toolbar.
      menuButton =
            <IconMenu
              iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Settings" onClick = {this._onSettings.bind(this)}/>
              <MenuItem primaryText="Log out" onClick = {this._onLogout.bind(this)}/>
            </IconMenu>;
    } else {
      // Not authenticated => render the login component.
      content = <Login onEnter={this._onUserPassword} />;
    }

    var appBar;
    if (Meteor.settings.public.showAppBar !== false) {
      appBar = <AppBar style={styles.appBar} title="NQM Highway App" showMenuIconButton={false} iconElementRight={menuButton} />;
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {appBar}
          <div style={styles.layoutContent}>
            {content}
          </div>
        </div>
      </MuiThemeProvider>
    );    
  }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Layout;