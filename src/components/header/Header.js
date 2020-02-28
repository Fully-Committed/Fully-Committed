import React from 'react';
import { useSelector } from 'react-redux';
import { toGetUserSession } from '../../selectors/useSelectors';
import { useLogout } from '../../hooks/useLogout';
import styles from './Header.css';
import { FormButton } from './FormButton';

const Header = () => {
  const user = useSelector(toGetUserSession);
  const { handleLogout } = useLogout();

  const logoutButton = user ? (
    <button className={styles.logout} onClick={handleLogout}>Logout</button>
  ) : (<></>);

  return (
    <header>
      <h1>Commit Ki77y</h1>
      <img className={styles.headerImage} src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/142_Github_logo_logos-512.png' />
      <FormButton />
      {logoutButton}
    </header>
  );
};

export default Header; 
