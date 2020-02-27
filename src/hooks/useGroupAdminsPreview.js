import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import addUser from action creator

export const useGroupAdminsPreview = () => {
  const [, setGroupAdmin] = useState();
  const [, setPreviewGroupAdmin] = useState(); 
  const dispatch = useDispatch();

  const handleAddDevToPreview = userClicked => {
    setGroupAdmin(userClicked);
    dispatch(addUser(userClicked));
  };

  const handleRemoveDevFromPreview = previewUserClicked => {
    setPreviewGroupAdmin(previewUserClicked);
    dispatch(removeUser(previewUserClicked));
  };

  return { handleAddDevToPreview, handleRemoveDevFromPreview };
};
