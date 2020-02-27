import React from 'react';
import styles from './Header.css';

const Header = () => {

  return (
    <header>
      <h1>Commit Kitty</h1>
      <img className={styles.headerImage} src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/142_Github_logo_logos-512.png' />
    </header>
  );
};

export default Header; 
