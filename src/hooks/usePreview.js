import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPreviewGroupName, addDev } from '../actions/previewActions';

export const usePreview = () => {
  const [groupName, setGroupName] = useState('');
  const [groupDev, setGroupDev] = useState();

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
    //clear the inputs to search that particular dev
    
  };


  return { handleGroupNameSubmit, setGroupName, handlePreviewNameChange, handleAddDevToPreview };
};
