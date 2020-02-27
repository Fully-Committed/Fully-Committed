import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

export const FormButton = () => (
  <section className={styles.navLinks}>
    <NavLink to='/make-group' activeStyle={{ background: 'slategrey', color: 'white' }}>Create Group</NavLink>
    <NavLink exact to='/' activeStyle={{ background: 'slategrey', color: 'white' }}>See Group Commits</NavLink>
  </section>
);
