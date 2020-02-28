import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPreviewGroupName, addDev, removeDev, createDev, setPreviewGroupDescription } from '../actions/previewActions';

export const usePreview = () => {
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [, setGroupDev] = useState();
  const [, setPreviewDev] = useState(); 
  const dispatch = useDispatch();

  const handlePreviewNameChange = ({ target }) => {
    setGroupName(target.value);
  };

  const handlePreviewDescriptionChange = ({ target }) => {
    setGroupDescription(target.value);
  };

  const handleInfoSubmit = () => {
    event.preventDefault();
    dispatch(setPreviewGroupName(groupName));
    dispatch(setPreviewGroupDescription(groupDescription));
  };

  const handleAddDevToPreview = devClicked => {
    setGroupDev(devClicked);
    dispatch(addDev(devClicked));
  };

  const handleRemoveDevFromPreview = previewDevClicked => {
    setPreviewDev(previewDevClicked);
    dispatch(removeDev(previewDevClicked));
  };

  const handleAddDevHandleCheckAgainstGitHub = (gitHubHandle, name) => {
    return dispatch(createDev(gitHubHandle, name))
      .then(dev => {
        setGroupDev(dev);
      });
  }; 


  return { handleInfoSubmit, setGroupName, handlePreviewNameChange, handleAddDevToPreview, handleRemoveDevFromPreview, handleAddDevHandleCheckAgainstGitHub, handlePreviewDescriptionChange };
};
