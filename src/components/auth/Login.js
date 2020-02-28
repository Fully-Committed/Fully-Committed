import React from 'react';
import { useAuthForm } from '../../hooks/useAuthForm';
import styles from './Auth.css';

export const Login = () => {
  const { email, password, setEmail, setPassword, handleSubmit } = useAuthForm('login');

  return (
    <section className={styles.formContainer}>
      <form className={styles.loginsignup} onSubmit={handleSubmit}>
        <label>Email: <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} /></label>
        <label>Password: <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} /></label>
        <button>Login</button>
      </form>
    </section>
  );

};

export default Login;
