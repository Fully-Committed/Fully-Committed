import React, { useState } from 'react';
import { GroupNameForm } from './groupNameForm/GroupNameForm';
import { AddDevForm } from './addDev/AddDev';
import { GroupPreview } from './groupPreview/GroupPreview';

const AdminGroupForm = () => {

  const handleSubmit = () => {
    event.preventDefault(); 
    ///dispact action to POST a new group ////
  };

<<<<<<< HEAD

  return (
    <form onSubmit={handleSubmit}>
      <GroupNameForm />
      <AddDevForm />
      <GroupPreview />
      
      <button>Create Group</button>
    </form>
  );
};


=======
>>>>>>> a6279ae782415155f58561133d72beb4c11133a7
export default AdminGroupForm;
