import { turnLoadingOn, turnLoadingOff } from './loadingActions';
import { getGroups } from '../services/adminDataViewServices';


export const SET_GROUP_SESSION = 'SET_GROUP_SESSION';
export const SET_GROUP_ERROR = 'SET_GROUP_ERROR';

export const setGroupArray = adminId => dispatch => {
  dispatch(turnLoadingOn());
  return getGroups(adminId)
    .then(groupArray => {
      dispatch({
        type: SET_GROUP_SESSION,
        payload: groupArray
      });
      return dispatch(turnLoadingOff());
    })
    .catch(groupError => dispatch({
      type: SET_GROUP_ERROR,
      payload: groupError
    }));
};
