import { Router } from '@reach/router';
import React from 'react';

import Home from './screens/Home';
import Register from './screens/Register';

const UnauthenticatedApp = () => {
  return (
    <div>
      <main id='#main-content'>
        <Routes />
      </main>
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
      <Home path='/' />
      <Register path='/register' />
    </Router>
  );
};

export default UnauthenticatedApp;
