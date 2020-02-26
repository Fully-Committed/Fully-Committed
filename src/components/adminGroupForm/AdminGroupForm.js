import React, { useState } from 'react';
import { GroupNameForm } from './groupNameForm/GroupNameForm';
import { AddDevForm } from './addDev/AddDev';
import { GroupPreview } from './groupPreview/GroupPreview';

const AdminGroupForm = () => {

  const postGroup = () => {
    ///dispact action to POST a new group ////
  };

<<<<<<< HEAD

  return (
    <>
      <GroupNameForm />
      <AddDevForm />
      <GroupPreview />
      
      <button onClick={postGroup}>Create Group</button>
    </>
  );
};


=======
>>>>>>> a6279ae782415155f58561133d72beb4c11133a7
export default AdminGroupForm;
