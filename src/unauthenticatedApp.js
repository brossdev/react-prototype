import { Router } from "@reach/router";
import React from "react";

import Home from "./screens/Home";

const UnauthenticatedApp = () => {
  return (
    <div>
      <Routes />
    </div>
  );
};

const RedirectHome = () => {
  window.location.href = `${window.location.origin}/`;
};

const Routes = () => {
  return (
    <Router>
      <RedirectHome default />
      <Home path="/" />
    </Router>
  );
};

export default UnauthenticatedApp;
