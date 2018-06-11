import * as reduxActions from "./redux-actions";

const makeAPICall = function({tdxConnections, store}, method, ...args) {
  const connectionManager = tdxConnections.defaultTDX;
  const promise = connectionManager.tdxApi[method](...args)
    .then((result) => {
      store.dispatch(reduxActions.serverIdle({...args}, result));
      return result;
    })
    .catch((err) => {
      if (err.name === "TDXApiError") {
        store.dispatch(reduxActions.serverError(JSON.parse(err.message)));
      } else {
        store.dispatch(reduxActions.serverError({code: err.code || "exception", message: err.message}));
      }
      return Promise.reject(err);
    });

  store.dispatch(reduxActions.serverPending(`calling '${method}'`));

  return promise;
};

export default {
  core: {
    dashboard({tdxConnections}) {
      tdxConnections.logout();
      window.location = "/dashboard";
    },
    signIn() {
      // Redirect to server route to begin authentication process.
      const callback = window.location.href;
      window.location = `/auth/?rurl=${callback}`;
    },
    signUp() {
      // Redirect to server route to begin authentication process, and redirect to the register page.
      const callback = "/profile";
      window.location = `/auth/?rurl=${callback}`;
    },
    setAuthToken({tdxConnections, store}, token) {
      store.dispatch(reduxActions.authenticating());
      return tdxConnections.setToken(token)
        .then(() => {
          store.dispatch(reduxActions.authenticated(!!token));
        })
        .catch((err) => {
          store.dispatch(reduxActions.authenticationError(err));
        });
    },
    setCamera({store}, id) {
      store.dispatch(reduxActions.setCamera(id));
    },
    signOut({tdxConnections, store}) {
      tdxConnections.logout();
      store.dispatch(reduxActions.signOut());
    },
    toggleTheme({store}) {
      store.dispatch(reduxActions.toggleTheme());
    },
  },
};
