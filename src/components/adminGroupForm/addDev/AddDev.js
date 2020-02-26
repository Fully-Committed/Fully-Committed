import React from 'react';
import { useAddDev } from '../../../hooks/useAddDev';

export const AddDevForm = () => {
  const { handleNameInputChange, handleGitHubHandleInputChange, handleAddDevSubmit, devGitHubHandle, devName, suggestedNamesList, suggestedHandlesList } = useAddDev();

  let names;
  if(suggestedNamesList.length > 0) {
    names = suggestedNamesList.map((dev, i) => (
      <li key={i}>
        {dev.devName}
      </li>
    ));
  }

  let handles;
  if(suggestedHandlesList.length > 0) {
    handles = suggestedHandlesList.map((dev, i) => (
      <li key={i}>
        {dev.devGitHubHandle}
      </li>
    ));
  }


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
      <input type="search" value={devGitHubHandle} onChange={handleGitHubHandleInputChange} />
      {
        handles && 
      <ul>
        {handles}
      </ul>
      }

      <button>Add Dev</button>
    </form>
  );
};

