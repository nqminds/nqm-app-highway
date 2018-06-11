/**
 * A higher order component that can be used to redirect to login for
 * users that are not authenticated
 */

import React from "react";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";

class AuthenticatedRoute extends React.Component {
  render() {
    const {authenticated, signIn, ...rest} = this.props;
    if (authenticated) {
      return <Route {...rest} />;
    } else {
      return signIn();
    }
  }
}

AuthenticatedRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
};

export default AuthenticatedRoute;
