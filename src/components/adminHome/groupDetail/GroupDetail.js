import React from 'react';
import DevList from './devList/DevList';

const GroupDetail = () => {
  //this handle refresh will likely relate to a custom hook
  const handleRefresh = () => console.log('refresh');

  //destructure group name off Group to populate title?

  return (
    <>
      <h2>ACPs from groupName</h2>
      <button onClick={({ target }) => handleRefresh(target.value)}>refresh</button>
      <DevList /> 
    </>
  );
};

export default GroupDetail;
