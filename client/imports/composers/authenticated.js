import connectionManager from "../../connection-manager";

function checkAuthenticated(props, onData) {
  // Simply pass an authenticated property reflecting the connection manager state.
  // This will re-run automatically when the connection status changes because the "authenticated" property is reactive (see connection-manager.js)
  if (connectionManager.authenticated.get()) {
    onData(null, { authenticated: true });
  } else {
    onData(null, { authenticated: false});
  }
}

export default checkAuthenticated;
