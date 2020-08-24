import React from "react";

const VerificationForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { verificationCode } = event.target.elements;
    onSubmit({
      verificationCode: verificationCode.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Confirm Verification Code</h2>
      <div>
        <div>
          <label htmlFor="verificationCode">
            <span>Code</span>
            <input id="verificationCode" type="number" />
          </label>
        </div>
        <div>
          <button type="submit">Confirm Registration</button>
        </div>
      </div>
    </form>
  );
};

export default VerificationForm;
