import React from 'react';
import { usePreview } from '../../../hooks/usePreview';

export const GroupNameForm = () => {
  const { handleInfoSubmit, handlePreviewNameChange, handlePreviewDescriptionChange } = usePreview();

  return (
    <form onSubmit={handleInfoSubmit}>
      <input type="text" placeholder='groupname' onChange={handlePreviewNameChange} />  
      <input type="text" placeholder='group description' onChange={handlePreviewDescriptionChange} />  
      <button>Preview Info</button>
    </form>
  );
};

