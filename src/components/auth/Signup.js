import React from 'react';
import { useAuthForm } from '../../hooks/useAuthForm';
import styles from './Auth.css';

export const Signup = () => {

  const { userName, email, password, setEmail, setUserName, setPassword, handleSubmit } = useAuthForm('signup');

  return (
    <>
      <form className={styles.loginsignup} onSubmit={handleSubmit}>
        <label>Username: <input type="text" value={userName} onChange={({ target }) => setUserName(target.value)} /></label>
        <label>Email: <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} /></label>
        <label>Password: <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} /></label>
        <button>Signup</button>
      </form>
    </>
  );

};

export default Signup;
