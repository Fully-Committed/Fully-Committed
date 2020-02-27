import React from 'react';
import { useSelector } from 'react-redux';
import { toGetUserSession } from '../../selectors/useSelectors';
import { useLogout } from '../../hooks/useLogout';

const Header = () => {
  const user = useSelector(toGetUserSession);
  const { handleLogout } = useLogout();

  const logoutButton = user ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (<></>);

  return (
    <>
      <h1>Commit Kitty</h1>
      {logoutButton}
    </>
  );
};

export default Header; 
