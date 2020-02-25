//container for both signup and login
import React from 'react';
import { Signup } from './Signup';
import { Login } from './Login';

export const AuthPage = () => {

  return (
    <>
      <Signup /> 
      <Login />
    </>
  );

};

export default AuthPage;
