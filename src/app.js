import React, { lazy, useEffect, Suspense } from "react";

const loadAuthenticatedApp = () => import("./authenticatedApp");
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import("./unauthenticatedApp"));

const App = () => {
  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  const user = false;
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <main>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</main>
    </Suspense>
  );
};

export default App;
