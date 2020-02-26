import React from 'react';
import { useAddDev } from '../../../hooks/useAddDev';

export const AddDevForm = () => {
  const { handleNameInputChange, handleAddDevSubmit, devGitHubUserName, devName, suggestedNamesList } = useAddDev();

  let names ;
  if(suggestedNamesList.length > 0) {
    names = suggestedNamesList.map((name, i) => (
      <li key={i}>
        {name}
      </li>
    ));
  }

  console.log(suggestedNamesList, 'list');



  return (
    <form onSubmit={handleAddDevSubmit}>

      <h1>Add Dev</h1>
      <h2>Dev Name: </h2>
      <input type="search" value={devName} onChange={handleNameInputChange} />
      {
        names && 
      <ul>
        {names}
      </ul>
      }

      <h2>Github Handle</h2>
      <input type="search" value={devGitHubUserName} onChange={handleNameInputChange} />
      <button>Add Dev</button>
    </form>
  );
};

