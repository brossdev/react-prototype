import { Router, Redirect } from '@reach/router';
import React from 'react';

import Header from './components/Header';

import Hub from './screens/Hub';

const AuthenticatedApp = () => {
  return (
    <div>
      <Header />
      <main id='#main-content'>
        <Routes />
      </main>
    </div>
  );
};

const RedirectHome = () => {
  return <Redirect noThrow to='/hub' />;
};

const Routes = () => {
  return (
    <Router>
      <RedirectHome default path='/' />
      <Hub path='/hub' />
    </Router>
  );
};

export default AuthenticatedApp;
