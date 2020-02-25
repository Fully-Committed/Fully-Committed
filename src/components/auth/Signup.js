import React from 'react';
import { useAuthForm } from '../../hooks/useAuthForm';
import { Link } from 'react-router-dom';

export const Signup = () => {

  const { userName, email, password, setEmail, setUserName, setPassword, handleSubmit } = useAuthForm('signup');

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label><input type="text" value={userName} onChange={({ target }) => setUserName(target.value)} />Username: </label>
        <label><input type="text" value={email} onChange={({ target }) => setEmail(target.value)} />Email: </label>
        <label><input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />Password: </label>
        <button>Signup</button>
      </form>
      <Link to='/auth/login'>I need to login</Link>
    </>
  );

};

export default Signup;
