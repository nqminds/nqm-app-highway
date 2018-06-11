import {compose, merge, reduxFactory, useDeps} from "@nqminds/nqm-tdx-client";
import {withRouter} from "react-router-dom";
import ApplicationRoot from "../components/application";

export const authMapper = ({
  accessToken,
  authenticated,
  authenticating,
  setAuthToken,
}, onData) => {
  // Determine if there is an accessToken we need to process.
  if (!authenticated && !authenticating && accessToken) {
    // There is an access token and we haven't started processing it yet.
    setAuthToken(accessToken)
      .then(() => {
        onData(null, {});
      });
  } else {
    // There is no access token, or there is an access token but we're already in the process
    // of initialising with it.
    onData(null, {});
  }
};

export const reduxMapper = (state) => {
  return {
    accessToken: state.core.accessToken,
    appInitialised: state.core.appInitialised,
    appInitialiseProgress: state.core.appInitialiseProgress,
    authenticated: state.core.authenticated,
    authenticating: state.core.authenticating,
    authenticationError: state.core.authenticationError,
    userInitialised: state.core.userInitialised,
  };
};

export const depsMapper = ({settings, store}, actions) => {
  return {
    store,
    setAuthToken: actions.core.setAuthToken,
    settings,
  };
};

const Container = merge(
  compose(authMapper),
  compose(reduxFactory(reduxMapper)),
  useDeps(depsMapper)
)(ApplicationRoot);

export default withRouter(Container);
