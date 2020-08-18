import React, { useState } from "react";
import Auth from "@aws-amplify/auth";
import useCallbackStatus from "../utils/useCallbackStatus";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [cognitoError, setCognitoError] = useState(false);
  const { isPending, isRejected, error, run } = useCallbackStatus();

  const isValidEmail = () => {
    const regex = new RegExp(
      "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );
    const validInput = regex.test(email);
    return validInput;
  };

  const handleLogin = async () => {
    if (isValidEmail() && password) {
      run(
        onSubmit({
          email,
          password,
        })
      ).catch((err) => {
        if (err.code) {
          if (
            err.code === "UserNotConfirmedException" ||
            err.code === "UserLambdaValidationException"
          ) {
            sendEmailVerification();
          }
          if (err.code === "NotAuthorizedException") {
            setCognitoError(true);
          }
        }
      });
    } else {
      setErrorMessage("Invalid credentials, please re-enter");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const parseError = (err) => {
    if (err.code === "UserLambdaValidationException") {
      return err.message.replace("PreAuthentication failed with error ", "");
    }
    return err.message;
  };

  const sendEmailVerification = async () => {
    setErrorMessage(null);
    try {
      await Auth.resendSignUp(email);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={(e) => {
        setErrorMessage(null);
        handleSubmit(e);
      }}
    >
      <h2>Log In</h2>
      <div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            <span>Email</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            <span>Password</span>
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMessage && (
            <div className="errors">
              <p>{errorMessage}</p>
            </div>
          )}
          {isRejected ? (
            <div className="errors">
              {cognitoError ? (
                <p>
                  Sorry, there was a problem logging you in, please try again{" "}
                </p>
              ) : (
                <p>{error ? parseError(error) : ""}</p>
              )}
            </div>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {" "}
            Log In {isPending ? <div>Loading ..</div> : null}
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
