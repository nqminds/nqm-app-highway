import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import ThemedApplication from "./containers/themed-application";

export default function(injectDeps, context, actions) {   // eslint-disable-line no-unused-vars
  const Routes = () => (
    <BrowserRouter>
      <ThemedApplication />
    </BrowserRouter>
  );

  const BoundRoutes = injectDeps(Routes);

  ReactDOM.render(
    <BoundRoutes />,
    document.getElementById("render-root")
  );
}
