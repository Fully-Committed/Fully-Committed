import React, { useState } from 'react';
import { GroupNameForm } from './groupNameForm/GroupNameForm';
import { AddDevForm } from './addDev/AddDev';
import { GroupPreview } from './groupPreview/GroupPreview';

const AdminGroupForm = () => {

  const postGroup = () => {
    ///dispact action to POST a new group ////
  };


  return (
    <>
      <GroupNameForm />
      <AddDevForm />
      <GroupPreview />
      
      <button onClick={postGroup}>Create Group</button>
    </>
  );
};


export default AdminGroupForm;
