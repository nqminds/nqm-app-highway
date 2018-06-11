import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// internal
import AppMenu from "./app-menu";
import {ContentMain, ContentPage, ContentSpacer} from "../../core/components/page-components";

// material-ui
import {withStyles} from "@material-ui/core/styles";
const styleSheet = ({palette}) => {
  return {
    content: {
      padding: "0 !important",
    },
    root: {
      backgroundColor: palette.background.appBar,
      color: palette.getContrastText(palette.background.appBar),
      flex: "0 0 auto",
    },
    subTitle: {
      fontSize: "calc(12px + (20 - 12) * (100vw - 320px) / (960 - 320))",
      padding: "0px 5px 0px 0px",
      textAlign: "right",
    },
    title: {
      fontSize: "calc(18px + (30 - 18) * (100vw - 320px) / (960 - 320))",
      fontWeight: "bold",
      padding: "5px 5px 0px 5px",
      textAlign: "right",
    },
  };
};

class AppTitle extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    darkTheme: PropTypes.bool,
    dashboard: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    user: PropTypes.object,
    userInitialised: PropTypes.bool.isRequired,
  };

  render() {
    const {
      classes,
      darkTheme,
      dashboard,
      settings,
      signIn,
      signUp,
      title,
      toggleTheme,
      user,
      userInitialised,
    } = this.props;


    const subTitle = "public";

    return (
      <div>
        <ContentPage className={classes.root}>
          <ContentSpacer />
          <ContentMain className={classes.content}>
            <div className={classes.title}>
              <Link to="/">{title}</Link>
            </div>
            <div className={classes.subTitle}>
              {subTitle}
            </div>
            <AppMenu
              dashboard={dashboard}
              darkTheme={darkTheme}
              settings={settings}
              signIn={signIn}
              signUp={signUp}
              toggleTheme={toggleTheme}
              userInitialised={userInitialised}
            />
          </ContentMain>
          <ContentSpacer />
        </ContentPage>
      </div>
    );
  }
}

export default withStyles(styleSheet, {name: "nqm-app-title"})(AppTitle);
