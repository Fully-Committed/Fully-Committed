import React from 'react';
import PropTypes from 'prop-types';

const Signup = () => {

  const { userName, email, password, setEmail, setUserName, setPassword } = useSignupForm();

  return (
    <form onSubmit={}>
      <input type="text" value={userName} onChange={({ target}) => setUserName(target.value)} />
      <input type="text" value={email} onChange={({ target}) => setEmail(target.value)} />
      <input type="password" value={password} onChange={({ target}) => setPassword(target.value)} />
    </form>
  )

};

Signup.propTypes = {};

export default Signup;