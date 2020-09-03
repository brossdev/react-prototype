import React, { useState } from 'react';
import { Link } from '@reach/router';

import { useAuth } from '../context/AuthContext';
import RegistrationForm from '../components/RegistrationForm';
import VerificationForm from '../components/VerificationForm';

const Register = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, confirmRegistration } = useAuth();

  const submitRegistration = ({ email, birthdate, password }) => {
    register({ email, birthdate, password });
    setEmail(email);
    setPassword(password);
    setStep(1);
  };

  const submitVerification = ({ verificationCode }) => {
    confirmRegistration({ email, password, verificationCode });
  };

  const renderSwitch = () => {
    switch (step) {
      case 0:
        return <RegistrationForm onSubmit={submitRegistration} />;
      case 1:
        return <VerificationForm onSubmit={submitVerification} />;
      default:
        return <RegistrationForm onSubmit={submitRegistration} />;
    }
  };

  return (
    <div>
      <div>
        <div>{renderSwitch()}</div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default Register;
