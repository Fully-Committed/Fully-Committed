import React from 'react';
import styles from './Auth.css';
import { NavLink } from 'react-router-dom';

export const AuthLinks = () => (
  <section className={styles.authLinks}>
    <NavLink to='/auth/signup' activeStyle={{ background: 'slategrey', color: 'white' }}>I need to sign up</NavLink>
    <NavLink to='/auth/login' activeStyle={{ background: 'slategrey', color: 'white' }}>I need to login</NavLink>
  </section>
);


