import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPreviewGroupName, addDev, removeDev } from '../actions/previewActions';

export const usePreview = () => {
  const [groupName, setGroupName] = useState('');
  const [groupDev, setGroupDev] = useState();
  const [previewDev, setPreviewDev] = useState(); 


  const dispatch = useDispatch();

  const handlePreviewNameChange = ({ target }) => {
    setGroupName(target.value);
  };

  const handleGroupNameSubmit = () => {
    event.preventDefault();
    dispatch(setPreviewGroupName(groupName));
  };

  const handleAddDevToPreview = devClicked => {
    setGroupDev(devClicked);
    dispatch(addDev(devClicked));
  };

  const handleRemoveDevFromPreview = previewDevClicked => {
    setPreviewDev(previewDevClicked);
    dispatch(removeDev(previewDevClicked));
  };


  return { handleGroupNameSubmit, setGroupName, handlePreviewNameChange, handleAddDevToPreview, handleRemoveDevFromPreview };
};
