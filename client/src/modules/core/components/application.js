/*
 * ApplicationRoot
 *
 * Injects the application-wide styles into the component context.
 */
import React from "react";
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";

// internal
import {ContentPage, ContentSpacer} from "./page-components";
import AppTitle from "../containers/app-title";
import AuthenticatedRoute from "../containers/authenticated-route";
import Home from "../containers/home";

// material-ui
import {withStyles} from "@material-ui/core/styles";
const styleSheet = ({palette}) => {
  return {
    applicationRoot: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    initialisationProgress: {
      padding: 10,
      margin: "10px auto 10px auto",
      width: "70vw",
      backgroundColor: palette.background.appBar,
      color: palette.getContrastText(palette.background.appBar),
      textAlign: "center",
    },
  };
};

class ApplicationRoot extends React.Component {
  static propTypes = {
    accessToken: PropTypes.string,
    appInitialiseProgress: PropTypes.string,
    appInitialised: PropTypes.bool.isRequired,
    authenticating: PropTypes.bool,
    authenticationError: PropTypes.string,
    classes: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    userInitialised: PropTypes.bool.isRequired,
  };

  render() {
    const {
      accessToken,
      appInitialised,
      appInitialiseProgress,
      authenticationError,
      classes,
      settings: {public: {applicationTitle}},
      userInitialised,
    } = this.props;

    // Decide the content to render based on the authentication status.
    let content;
    if (accessToken && !userInitialised && !appInitialised) {
      // We have an accessToken, but the application is not initialised yet.
      let inner;
      if (authenticationError) {
        // There has been an error during authentication.
        inner = <div className={classes.initialisationProgress}>{authenticationError}</div>;
      } else {
        // No error => must be in the process of initialising, so display progress.
        inner = <div className={classes.initialisationProgress}>initialising {appInitialiseProgress}</div>;
      }
      // Show the progress/error.
      content = <div className={classes.contentMain}>{inner}</div>;
    } else {
      //
      // There is no access token (nobody is signed in => 'public' mode), or there is a token and the app
      // has processed it and is initialised.
      //
      // Define the top-level routes.
      // Add routes here for your application, the route /user is an example of sub routes
      content = (
        <Switch>
          <AuthenticatedRoute exact path="/" component={Home} />
        </Switch>
      );
    }

    return (
      <div className={classes.applicationRoot}>
        <AppTitle title={applicationTitle} />
        <ContentPage>
          <ContentSpacer />
          {content}
          <ContentSpacer />
        </ContentPage>
      </div>
    );
  }
}

export default withStyles(styleSheet)(ApplicationRoot);
