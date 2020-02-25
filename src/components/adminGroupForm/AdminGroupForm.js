import React, { useState } from 'react';
import { GroupNameForm } from './groupNameForm/GroupNameForm';
import { AddDev } from './addDev/AddDev';

const AdminGroupForm = () => {

  const handleSubmit = () => {
    event.preventDefault(); 
    ///dispact action to POST a new group ////
  };


  return (
    <form onSubmit={handleSubmit}>
      <GroupNameForm />
      <AddDev />
      
      <button>Create Group</button>
    </form>
  );
};


export default AdminGroupForm;
