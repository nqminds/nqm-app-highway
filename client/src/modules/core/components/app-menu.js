import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {NavLink} from "react-router-dom";

// internal

// material-ui
import IconButton from "@material-ui/core/IconButton";
import AppsIcon from "@material-ui/icons/Apps";
import ThemeIcon from "@material-ui/icons/LightbulbOutline";
import Tooltip from "@material-ui/core/Tooltip";
import {withStyles} from "@material-ui/core/styles";
import {emphasize} from "@material-ui/core/styles/colorManipulator";

const styleSheet = ({palette}) => {
  const activeItemBackground = emphasize(palette.background.appBar, 0.2);
  return {
    menuIcon: {
      flex: "0 0 auto",
      color: palette.text.hint,
    },
    menu: {
      color: palette.text.secondary,
      cursor: "pointer",
      display: "flex",
      flex: "0 1 auto",
      fontSize: "calc(12px + (20 - 12) * (100vw - 320px) / (960 - 320))",
      fontWeight: "lighter",
      padding: "10px 0px",
      textAlign: "center",
      "&:after": {
        content: "\"·\"",
        color: palette.text.secondary,
        fontWeight: "normal",
      },
    },
    menuActive: {
      cursor: "default",
      color: palette.text.hint,
      fontWeight: "bold",
    },
    menuLast: {
      "&:after": {
        content: "\"\"",
      },
    },
    menuText: {
      padding: "0px 5px",
      "&:hover": {
        color: palette.getContrastText(activeItemBackground),
        backgroundColor: activeItemBackground,
      },
    },
    menuTextFirst: {
    },
    root: {
      alignItems: "center",
      display: "flex",
      flex: "0 0 auto",
      justifyContent: "space-between",
    },
    spacer: {
      flex: "1 1 auto",
    },
  };
};

class AppMenu extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    darkTheme: PropTypes.bool,
    dashboard: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    userInitialised: PropTypes.bool.isRequired,
  };

  handleApps = () => {
    this.props.dashboard();
  };

  handleSignIn = (evt) => {
    evt.preventDefault();
    this.props.signIn();
  };

  handleSignUp = (evt) => {
    evt.preventDefault();
    this.props.signUp();
  };

  handleTheme = () => {
    this.props.toggleTheme();
  };

  render() {
    const {classes, darkTheme, settings, userInitialised} = this.props;

    const userLinks = [];
    if (!userInitialised) {
      // If no user has signed in, display the sign-in and register links.
      userLinks.push(
        <a
          className={classes.menu}
          key="signIn"
          href="#"
          onClick={this.handleSignIn}
        >
          <div className={classes.menuText}>sign in</div>
        </a>
      );
      userLinks.push(
        <a
          className={classnames(classes.menu, classes.menuLast)}
          key="register"
          onClick={this.handleSignUp}
        >
          <div className={classes.menuText}>register</div>
        </a>
      );
    } else {
      // Add a sign-out link for all logged in users.
      userLinks.push(
        <a
          className={classnames(classes.menu, classes.menuLast)}
          key="sign-out"
          href="/sign-out"
        >
          <div className={classes.menuText}>sign out</div>
        </a>
      );
    }

    // Always render the 'home' and 'search' links, followed by the context-sensitive links.
    return (
      <div className={classes.root}>
        <NavLink
          activeClassName={classes.menuActive}
          className={classes.menu}
          exact
          to="/"
        >
          <div className={classnames(classes.menuText, classes.menuTextFirst)}>home</div>
        </NavLink>
        {userLinks}
        <div className={classes.spacer} />
        <Tooltip title={darkTheme ? "light theme" : "dark theme"}>
          <IconButton className={classes.menuIcon} onClick={this.handleTheme}>
            <ThemeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="nquiringminds applications">
          <IconButton className={classes.menuIcon} onClick={this.handleApps}>
            <AppsIcon />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(styleSheet, {name: "nqm-app-menu"})(AppMenu);
