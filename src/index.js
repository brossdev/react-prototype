import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Amplify from "@aws-amplify/core";

import AppProviders from "./context";

import "./index.css";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AWS_APP_CLIENT_ID,
  },
});

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
