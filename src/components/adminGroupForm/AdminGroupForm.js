import React, { useState } from 'react';
import { GroupNameForm } from './groupNameForm/GroupNameForm';
import { AddDevForm } from './addDev/AddDev';
import { GroupPreview } from './groupPreview/GroupPreview';

const AdminGroupForm = () => {

  const handleSubmit = () => {
    event.preventDefault(); 
    ///dispact action to POST a new group ////
  };


  return (
    <form onSubmit={handleSubmit}>
      <GroupNameForm />
      <AddDevForm />
      <GroupPreview />
      
      <button>Create Group</button>
    </form>
  );
};


export default AdminGroupForm;
