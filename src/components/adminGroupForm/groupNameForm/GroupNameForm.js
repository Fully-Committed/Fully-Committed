import React from 'react';
import { usePreview } from '../../../hooks/usePreview';

export const GroupNameForm = () => {
  const { handleGroupNameSubmit, setGroupName, groupName } = usePreview();

  return (
    <form onSubmit={handleGroupNameSubmit}>
      <input type="text" value={groupName} placeholder = 'groupname' onChange={({ target }) => setGroupName(target.value)} />  
      <button>Preview Name</button>
    </form>
  );
};

