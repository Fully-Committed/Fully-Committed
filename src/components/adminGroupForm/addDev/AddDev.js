import React from 'react';
import { useAddDev } from '../../../hooks/useAddDev';

export const AddDevForm = () => {
  const { handleChange, handleAddDevSubmit, devGitHubUserName, devName } = useAddDev();

  return (
    <form onSubmit={handleAddDevSubmit}>
      <h1>Add Dev</h1>
      <h2>Dev Name</h2>
      <input type="search" name="devName" value={devName} onChange={handleChange} />
      <h2>Github Handle</h2>
      <input type="search" name="devGitHubHandle" value={devGitHubUserName} onChange={handleChange} />
      <button>Add Dev</button>
    </form>
  );
};

