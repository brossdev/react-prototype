import React from "react";

const RegistrationForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <div>
          <label htmlFor="email">
            <span>Email</span>
            <input id="email" type="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <span>Password</span>
            <input id="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
