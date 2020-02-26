export const SET_PREVIEW_GROUP_NAME = 'SET_PREVIEW_GROUP_NAME';
export const setPreviewGroupName = previewName => ({
  type: SET_PREVIEW_GROUP_NAME, 
  payload: previewName
});

export const ADD_DEV = 'ADD_DEV';
export const addDev = previewDev => ({
  type: ADD_DEV, 
  payload: previewDev
});

// export const creaateDev = gitHubHandle => dispatch => {
//   //dispatch(loadingstate) optional
//   //call our dervice to hit the route on the backend for posting a dev 
//   //.then(validatedDev => dispatch(addDev(validatedDev)))
// };
  
export const REMOVE_DEV = 'REMOVE_DEV';
export const removeDev = previewDev => ({
  type: REMOVE_DEV,
  payload: previewDev
});


//same sort of thing for group that we will post --> in reducer that is shared with home

// export const creaateDev = gitHubHandle => dispatch => {
//   //dispatch(loadingstate) optional
//   //call our dervice to hit the route on the backend for posting a dev 
//   //.then(validatedDev => dispatch(addDev(validatedDev)))
// };