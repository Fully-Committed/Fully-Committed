import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AdminAddGroupAdminsForm } from './AdminAddGroupAdminsForm';
import { toGetPreviewUsers } from '../../selectors/useSelectors';
import { updateGroupWithPreviewAdmins } from '../../actions/previewAdminsActions';


export const AdminGroupForm = () => {
  const dispatch = useDispatch();

  const previewUsersArray = useSelector(toGetPreviewUsers); 

  const previewUsersIdsArray = previewUsersArray.map(previewUser => previewUser._id);

  const updateGroupWithNewAdmins = idsArray => {
    console.log(idsArray, 'this is the ids array to update the group with');
    return dispatch(updateGroupWithPreviewAdmins(idsArray));
  };

  return (
    <>
      <AdminAddGroupAdminsForm />
      <useGroupAdminsPreview />
      
      <button onClick={() => updateGroupWithNewAdmins(previewUsersIdsArray)}>Create Group</button>
    </>
  );
};
