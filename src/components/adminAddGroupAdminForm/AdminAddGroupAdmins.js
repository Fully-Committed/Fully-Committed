import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AdminAddGroupAdminsForm } from './AdminAddGroupAdminsForm';
import { toGetPreviewUsers } from '../../selectors/useSelectors';
import { updateGroupWithPreviewAdmins, updateUserToAdmin } from '../../actions/previewAdminsActions';


export const AdminGroupForm = () => {
  const dispatch = useDispatch();

  const previewUsersArray = useSelector(toGetPreviewUsers); 

  const updateUsersToAdmins = arr => {
    return arr.forEach(user => {
      dispatch(updateUserToAdmin(user));
    })
      .map(previewUser => previewUser._id);
  };

  const usersUpdatedToAdmins = updateUsersToAdmins(previewUsersArray); 

  //THIS WILL NOT WORK AS IS
  const updateGroupWithNewAdmins = idsArray => {
    console.log(idsArray, 'this is the ids array to update the group with');
    return dispatch(updateGroupWithPreviewAdmins(idsArray));
  };

  return (
    <>
      <AdminAddGroupAdminsForm />
      <useGroupAdminsPreview />
      
      <button onClick={() => updateGroupWithNewAdmins(usersUpdatedToAdmins)}>Create Group</button>
    </>
  );
};
