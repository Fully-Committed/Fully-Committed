import React from 'react';
import { GroupNameForm } from './groupNameForm/GroupNameForm';
import { AddDevForm } from './addDev/AddDev';
import { GroupPreview } from './groupPreview/GroupPreview';
import { useSelector } from 'react-redux';
import { toGetPreviewDevs, toGetUserSession } from '../../selectors/useSelectors';
import { usePreview } from '../../hooks/usePreview';

export const AdminGroupForm = () => {
  const devsInGroupArray = useSelector(toGetPreviewDevs);
  const { groupName, groupDescription } = usePreview(); 
  const admin = useSelector(toGetUserSession);

  const groupToPost = { 
    groupName: groupName,
    groupDescription: groupDescription, 
    devsInGroup: devsInGroupArray, 
    adminIds: [admin._id]
  };


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

