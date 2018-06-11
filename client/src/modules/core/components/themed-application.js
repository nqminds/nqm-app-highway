/*
 * ThemedApplication
 *
 * Supplies the top-level material-ui theme provider, and sets the document body to match.
 * This is critical for using material-ui throughout your application, it also enables
 * on the fly theme changes
 */
import React from "react";
import PropTypes from "prop-types";

// internal
import Application from "../containers/application";

// material-ui
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class ThemedApplication extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
  };

  render() {
    const {theme} = this.props;

    // Set the document background to the palette colour.
    document.body.style.background = theme.palette.background.default;
    document.body.style.color = theme.palette.text.primary;

    return (
      <MuiThemeProvider theme={theme}>
        <Application />
      </MuiThemeProvider>
    );
  }
}

export default ThemedApplication;
