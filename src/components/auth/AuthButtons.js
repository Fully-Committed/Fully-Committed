import React from 'react';
import { Link } from 'react-router-dom';


export const AuthButtons = () => {

  return (
    <section>
      <Link to='/auth/login'>Log In</Link>
      <Link to='/auth/signup'>Sign Up</Link>
    </section>
  );

};

