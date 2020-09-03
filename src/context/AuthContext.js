import React, { createContext, useState, useLayoutEffect, useContext } from 'react';
import { useAsync } from 'react-async';
import bootstrapAppData from '../utils/bootstrapAppData';
import * as authClient from '../api/auth';

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);

  const { data = { user: null }, error, isRejected, isPending, isSettled, reload } = useAsync({
    promiseFn: bootstrapAppData,
  });

  useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true);
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      return <div>Loading ...</div>;
    }

    if (isRejected) {
      return (
        <div>
          <p>There is a problem, try refreshing the app</p>
          <pre>{error.message}</pre>
        </div>
      );
    }
  }

  const register = (form) => authClient.register(form);
  const confirmRegistration = (form) => authClient.confirmRegistration(form).then(reload);
  const login = (form) => authClient.login(form).then(reload);
  const logout = (form) => authClient.logout(form).then(reload);

  return <AuthContext.Provider value={{ data, register, confirmRegistration, login, logout }} {...props} />;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be defined within an Auth Provider');
  }
  return context;
};

export { AuthContextProvider, useAuth };
