import React from 'react';
import styles from './Header.css';
import { FormButton } from './FormButton';

const Header = () => {

  return (
    <header>
      <h1>Commit Kitty</h1>
      <img className={styles.headerImage} src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/142_Github_logo_logos-512.png' />
      <FormButton />
    </header>
  );
};

export default Header; 
