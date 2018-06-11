import {compose, merge, reduxFactory, useDeps} from "@nqminds/nqm-tdx-client";
import {createMuiTheme} from "@material-ui/core/styles";

import blueGrey from "@material-ui/core/colors/blueGrey";
import grey from "@material-ui/core/colors/grey";

import {emphasize} from "@material-ui/core/styles/colorManipulator";
import {withRouter} from "react-router-dom";
import ThemedApplication from "../components/themed-application";

export const themeMapper = ({darkTheme, settings}, onData) => {
  const colours = { // Extra theme colours may be added here
    public: {
      primary: blueGrey,
      secondary: blueGrey,
      text: grey,
    },
  };

  let colour; // Choose colour scheme here based off e.g. profile initialised in boot
  colour = colours.public;

  const palette = {
    background: {},
    primary: colour.primary,
    secondary: colour.secondary,
    text: {},
    type: darkTheme ? "dark" : "light",
  };

  const overrides = {
  };

  const theme = createMuiTheme({overrides, palette});

  const themedPalette = theme.palette;
  themedPalette.background.appBar = darkTheme ? colour.primary[800] : colour.primary[600];
  themedPalette.background.default = emphasize(themedPalette.background.paper, darkTheme ? 0.07 : 0.025);
  themedPalette.text.hint = darkTheme ? colour.text[50] : colour.text[100];
  themedPalette.text.icon = darkTheme ? colour.text[300] : colour.text[600];
  themedPalette.text.primary = darkTheme ? colour.text[100] : colour.text[800];
  themedPalette.text.secondary = darkTheme ? colour.text[300] : colour.text[300];

  onData(null, {theme});
};

export const reduxMapper = (state) => {
  return {
    darkTheme: state.core.darkTheme,
  };
};

export const depsMapper = ({settings, store}) => {
  return {
    settings,
    store,
  };
};

const Container = merge(
  compose(themeMapper, {propsToWatch: ["darkTheme"]}),
  compose(reduxFactory(reduxMapper)),
  useDeps(depsMapper)
)(ThemedApplication);

export default withRouter(Container);
