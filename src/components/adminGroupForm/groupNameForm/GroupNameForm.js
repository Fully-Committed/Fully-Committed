import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GroupNameForm = () => {

  const [groupName, setGroupName] = useState('');


  const handleGroupNameSubmit = () => {
    event.preventDefault();
    ////// dispatch action to display name in preview
  };

  return (

    <form onSubmit={handleGroupNameSubmit}>
      <input type="text" value={groupName} placeholder = 'groupname' onChange={({ target }) => setGroupName(target.value)} />  
      <button>Preview Name</button>
    </form>


  );
};

GroupNameForm.propTypes = {};

