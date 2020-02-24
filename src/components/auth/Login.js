import React from 'react';
import { useAuthForm } from '../../hooks/useAuthForm';

const Login = () => {

  const { email, password, setEmail, setPassword, handleSubmit } = useAuthForm('login');

  return (
    <form onSubmit={handleSubmit}>
      <label><input type="text" value={email} onChange={({ target }) => setEmail(target.value)} />Email: </label>
      <label><input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />Password: </label>
      <button>Login</button>
    </form>
  );

};

export default Login;
