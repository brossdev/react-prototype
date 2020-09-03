import React from 'react';
import { AuthContextProvider } from './AuthContext';
import { UserContextProvider } from './UserContext';

const AppProviders = ({ children }) => (
  <AuthContextProvider>
    <UserContextProvider>{children}</UserContextProvider>
  </AuthContextProvider>
);

export default AppProviders;
