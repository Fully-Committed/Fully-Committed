import React from 'react';
import { usePreview } from '../../../hooks/usePreview';

export const GroupNameForm = () => {
  const { handleGroupNameSubmit, handlePreviewNameChange } = usePreview();

  return (
    <form onSubmit={handleGroupNameSubmit}>
      <input type="text" placeholder = 'groupname' onChange={handlePreviewNameChange} />  
      <button>Preview Name</button>
    </form>
  );
};

