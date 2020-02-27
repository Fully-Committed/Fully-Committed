import React from 'react';
import { usePreview } from '../../../hooks/usePreview';
import styles from './GroupNameForm.css';

export const GroupNameForm = () => {
  const { handleInfoSubmit, handlePreviewNameChange, handlePreviewDescriptionChange } = usePreview();

  return (
    <form className={styles.nameForm} onSubmit={handleInfoSubmit}>
      <h2>Group Information</h2>
      <label>Group Name:<input type="text" required placeholder='FSJS Fall 2019'onChange={handlePreviewNameChange} /></label> 
      <label>Group Description:<input type="text" placeholder='The best cohort ever' onChange={handlePreviewDescriptionChange} /></label>
      <button>Set Group Information</button>
    </form>
  );
};

