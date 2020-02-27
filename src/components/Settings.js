import React from 'react';
import { useSettings } from '../hooks/useSettings';

export const Settings = () => {
  const { userId, changeUserInput, handleSubmit, changeNewRole, groupId, changeGroupInput } = useSettings();

  return (
    <form onSubmit={handleSubmit}>
      {/* CURRENTLY this input needs to be an id
      WE WANT - onchange to search our database for a user
      THEN grab the user id somewhere and use that  */}
      <p>Change user:</p>
      <input onChange={({ target }) => changeUserInput(target.value) } type="text" value={userId} />

      {/* This input will change the role of the  */}
      <p>to this role:</p>
      <select onChange={({ target }) => changeNewRole(target.value) } id="role" name="role">
        <option value="Admin">Admin</option>
        <option value="Dev">Remove Admin</option>
      </select>

      {/* This input will search for a Group within out database */}
      <p>on this Group:</p>
      <input onChange={({ target }) => changeGroupInput(target.value) } type="text" value={groupId} />

      <button>Submit</button>
      
    </form>
  );
};
