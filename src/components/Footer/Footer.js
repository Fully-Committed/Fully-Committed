import React from 'react';
import styles from './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => (

  <footer className={styles.footer}>
    <Link exact to='/aboutus'>About Us</Link>
  </footer>

);

