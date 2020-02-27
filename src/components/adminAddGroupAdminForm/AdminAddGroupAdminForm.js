import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGroupAdminsPreview } from '../../hooks/useGroupAdminsPreview';


export const AddDevForm = () => {
  const [userUsername, setUserUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const dispatch = useDispatch();

  const { handleAddUserToPreview } = useGroupAdminsPreview();

  //toGetSuggestedUsers selector relates to addGroupAdminsReducer
  const users = useSelector(toGetSuggestedUsers);


  const usernameElements = users.map((user, i) => (
    <li onClick={() => {
      handleAddUserToPreview(user);
      setUserUsername(''); 
    }} key={i}>
      {user.userName}
    </li>
  ));
 
  const emailElements = users.map((user, i) => (
    <li onClick={() => {
      handleAddUserToPreview(user);
      setUserEmail('');
    }} key={i}>
      {user.email}
    </li>
  ));

  //actions related to addGroupAdminsReducer
  const handleUsernameChange = ({ target }) => {
    dispatch(setSuggestedUsersByUsername(target.value));
    setUserUsername(target.value);
  };

  const handleEmailChange = ({ target }) => {
    dispatch(setSuggestedUsersByEmail(target.value));
    setUserEmail(target.value);
  };

  const userDoesNotExistMessage = () => {
    if(usernameElements.length === 0 && emailElements.length === 0 && userUsername && userEmail) {
      return (
        <p>This user does not exist yet & they must create an account to be made a group admin</p>
      );
    }
  };

  return (
    <form onSubmit={() => event.preventDefault()}>

      <h1>Add Admin</h1>
      <h2>Username: </h2>
      <input type="search" value={userUsername} onChange={handleUsernameChange} />
      <ul>
        {usernameElements}
      </ul>

      <h2>Email: </h2>
      <input type="search" value={userEmail} onChange={handleEmailChange} />
      <ul>
        {emailElements}
      </ul>

      {userDoesNotExistMessage()}
      
      <p>If an admin does not exist in our library, admin must first create account as a user and then they can be added as Admin </p>

    </form>
  );
};
