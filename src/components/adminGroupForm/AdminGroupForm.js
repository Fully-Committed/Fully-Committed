import React from 'react';
import { GroupNameForm } from './groupNameForm/GroupNameForm';
import { AddDevForm } from './addDev/AddDev';
import { GroupPreview } from './groupPreview/GroupPreview';
import { useSelector, useDispatch } from 'react-redux';
import { toGetPreviewDevs, toGetUserSession, toGetPreviewGroupName, toGetPreviewGroupDescription } from '../../selectors/useSelectors';
import { createGroup } from '../../actions/groupActions';

export const AdminGroupForm = () => {
  const devsInGroupArray = useSelector(toGetPreviewDevs);
  const groupName = useSelector(toGetPreviewGroupName);
  const groupDescription = useSelector(toGetPreviewGroupDescription);
  const admin = useSelector(toGetUserSession);
  const dispatch = useDispatch();

  const groupToPost = { 
    groupName: groupName,
    groupDescription: groupDescription, 
    devsInGroup: devsInGroupArray, 
    adminIds: [admin._id]
  };

  const postGroup = group => {
    console.log(group, 'this is the group to post');
    return dispatch(createGroup(group));
  };

  return (
    <>
      <GroupNameForm />
      <AddDevForm />
      <GroupPreview />
      
      <button onClick={() => postGroup(groupToPost)}>Create Group</button>
    </>
  );
};

