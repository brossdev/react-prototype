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
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <h2>Confirm Verification Code</h2>
      <div>
        <div className="mb-4">
          <label htmlFor="verificationCode">
            <span>Code</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="verificationCode"
              type="number"
            />
          </label>
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <button type="submit">Confirm Registration</button>
        </div>
      </div>
    </form>
  );
};

export default VerificationForm;
