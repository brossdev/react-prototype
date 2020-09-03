import React, { lazy, useEffect, Suspense } from 'react';
import { useUser } from './context/UserContext';

const loadAuthenticatedApp = () => import('./authenticatedApp');
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import('./unauthenticatedApp'));

const App = () => {
  const user = useUser();
  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  return <Suspense fallback={<div>Loadiung ...</div>}>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Suspense>;
};

export default App;
