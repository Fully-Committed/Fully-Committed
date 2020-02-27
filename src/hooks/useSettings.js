import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { turnLoadingOn, turnLoadingOff } from '../actions/loadingActions';
import { changeRole, associateAdminWithGroup } from '../services/authServices';

export const useSettings = () => {
  const dispatch = useDispatch();
  const [userId, changeUserInput] = useState('');
  const [groupId, changeGroupInput] = useState('');
  const [newRole, changeNewRole] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(turnLoadingOn());

    changeRole(userId, newRole)
      .then(() => associateAdminWithGroup(userId, groupId))
      .then(() => dispatch(turnLoadingOff()));
    //need to do something to let user know it was successful
    //like if success, return to other page, if not let them know
  };

  return { userId, changeUserInput, handleSubmit, changeNewRole, groupId, changeGroupInput };
}