export const SET_PREVIEW_GROUP_NAME = 'SET_PREVIEW_GROUP_NAME';
export const setPreviewGroupName = () => ({
  type: SET_PREVIEW_GROUP_NAME, 
  payload: 'previewName'
});

export const ADD_DEV = 'ADD_DEV';
export const addDev = () => ({
  type: ADD_DEV, 
  payload: 'previewDev'
});
  
export const REMOVE_DEV = 'REMOVE_DEV';
export const removeDev = () => ({
  type: REMOVE_DEV,
  payload: 'previewDev'
});
