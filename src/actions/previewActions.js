import { fetchDevsByName, fetchDevsByGitHubHandle, fetchPostNewDev, fetchPostNewGroup } from '../services/adminGroupFormServices';
import { turnLoadingOn, turnLoadingOff } from '../actions/loadingActions';
import { isHandleOnGitHub } from '../services/adminDataViewServices';


export const SET_PREVIEW_GROUP_NAME = 'SET_PREVIEW_GROUP_NAME';
export const setPreviewGroupName = previewName => ({
  type: SET_PREVIEW_GROUP_NAME, 
  payload: previewName
});

export const SET_PREVIEW_GROUP_DESCRIPTION = 'SET_PREVIEW_GROUP_DESCRIPTION';
export const setPreviewGroupDescription = previewDescription => ({
  type: SET_PREVIEW_GROUP_DESCRIPTION, 
  payload: previewDescription
});

export const ADD_DEV = 'ADD_DEV';
export const addDev = previewDev => ({
  type: ADD_DEV, 
  payload: previewDev
});

export const SET_SUGGESTED_DEVS = 'SET_SUGGESTED_DEVS';
export const setSuggestedDevs = devs => ({
  type: SET_SUGGESTED_DEVS,
  payload: devs
});
export const setSuggestedDevsByName = name => dispatch => {
  dispatch(setSuggestedDevs([]));
  return fetchDevsByName(name)
    .then(devs => dispatch(setSuggestedDevs(devs)));
};
export const setSuggestedDevsByHandle = handle => dispatch => {
  dispatch(setSuggestedDevs([]));
  return fetchDevsByGitHubHandle(handle)
    .then(devs => dispatch(setSuggestedDevs(devs)));
};

export const createDev = (handle, name) => dispatch => {
  dispatch(turnLoadingOn());
  return isHandleOnGitHub(handle)
    .then(validatedDev => {
      console.log('this is the value returned from isHandleOnGitHub', validatedDev);
      if(validatedDev.message !== 'Not Found') {
        const devForPost = {
          devGitHubHandle: handle,
          devName: name
        };
        fetchPostNewDev(devForPost)
          .then(dev => {
            dispatch(addDev(dev));
            dispatch(turnLoadingOff());
          });
      }
      else {
        throw Error({
          message: 'This GitHub user handle does not exist', 
          status: 404
        }); 
      }
    });
};
  
export const REMOVE_DEV = 'REMOVE_DEV';
export const removeDev = previewDev => ({
  type: REMOVE_DEV,
  payload: previewDev
});

export const CLEAR_STATE = 'CLEAR_STATE';
export const clearState = () => ({
  type: CLEAR_STATE
});

export const createGroup = groupToPost => dispatch => {
  dispatch(turnLoadingOn());
  return fetchPostNewGroup(groupToPost)
    .then(() => {
      dispatch(clearState());
      dispatch(turnLoadingOff());
    });
};

