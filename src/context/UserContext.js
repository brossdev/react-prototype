import React, { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";

const UserContext = createContext();

const UserContextProvider = (props) => {
  const {
    data: { user },
  } = useAuth();
  return <UserContext.Provider value={user} {...props} />;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("use User must be used within a user provider");
  }
  return context;
};

export { UserContextProvider, useUser };
