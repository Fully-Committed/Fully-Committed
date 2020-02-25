import React from 'react';
import { DevList }  from './DevList';

export const DataView = () => {
  const handleRefresh = () => console.log('refresh');


  return (
    <>
      <h2>ACPs from groupName</h2>
      <button onClick={({ target }) => handleRefresh(target.value)}>refresh</button>
      <DevList /> 
    </>
  );
};
