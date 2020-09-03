import React from 'react';

const RegistrationForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, dob, password } = event.target.elements;
    onSubmit({
      email: email.value,
      birthdate: dob.value,
      password: password.value,
    });
  };

  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <div className='mb-4'>
          <label htmlFor='email'>
            <span>Email</span>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label htmlFor='dob'>
            <span>Date of birth</span>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='dob'
              type='date'
            />
          </label>
        </div>
        <div className='mb-6'>
          <label htmlFor='password'>
            <span>Password</span>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
            />
          </label>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
