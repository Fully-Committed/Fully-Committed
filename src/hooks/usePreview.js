import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPreviewGroupName } from '../actions/previewActions';

export const usePreview = () => {
  const [groupName, setGroupName] = useState('');
  const dispatch = useDispatch();

  const handlePreviewNameChange = ({ target }) => {
    setGroupName(target.value);
  };

  const handleGroupNameSubmit = () => {
    event.preventDefault();
    dispatch(setPreviewGroupName(groupName));
  };


  return { handleGroupNameSubmit, setGroupName, handlePreviewNameChange };
};
