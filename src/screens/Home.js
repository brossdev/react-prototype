import React from "react";
import { Link } from "@reach/router";
import LoginForm from "../components/LoginForm";

import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { login } = useAuth();

  const submitLogin = async ({ email, password }) => {
    await login({ email, password });
  };

  <div className="w-full max-w-xs">
    <LoginForm onSubmit={submitLogin} />
    <Link to="/register">Register</Link>
    <p className="text-center text-gray-500 text-xs">
      &copy;2020 BR Corp. All rights reserved.
    </p>
  </div>;
};

export default Home;
