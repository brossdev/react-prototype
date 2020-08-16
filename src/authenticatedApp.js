import { Router, Redirect } from "@reach/router";
import React from "react";

import Header from "./components/Header";

import Dashboard from "./screens/Dashboard";

const AuthenticatedApp = () => {
  return (
    <div>
      <Header />
      <main id="#main-content">
        <Routes />
      </main>
    </div>
  );
};

const RedirectHome = () => {
  return <Redirect noThrow to="/dashboard" />;
};

const Routes = () => {
  return (
    <Router>
      <RedirectHome default path="/" />
      <Dashboard path="/dashboard" />
    </Router>
  );
};

export default AuthenticatedApp;
