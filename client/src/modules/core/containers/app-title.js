import {compose, merge, reduxFactory, useDeps} from "@nqminds/nqm-tdx-client";
import {withRouter} from "react-router-dom";
import AppTitle from "../components/app-title";

export const reduxMapper = (state) => {
  return {
    darkTheme: state.core.darkTheme,
    profile: state.core.profile,
    userInitialised: state.core.userInitialised,
  };
};

export const depsMapper = ({settings, store, tdxConnections}, actions) => {
  return {
    dashboard: actions.core.dashboard,
    settings,
    signIn: actions.core.signIn,
    signUp: actions.core.signUp,
    store,
    toggleTheme: actions.core.toggleTheme,
    user: tdxConnections.defaultTDX.user,
  };
};

const Container = merge(
  compose(reduxFactory(reduxMapper)),
  useDeps(depsMapper)
)(AppTitle);

export default withRouter(Container);
