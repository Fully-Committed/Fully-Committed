//import fetchUsersByUserName and fetchUsersByEmail from services
import { turnLoadingOn, turnLoadingOff } from './loadingActions';


export const ADD_USER = 'ADD_USER';
export const addUser = previewUser => ({
  type: ADD_USER, 
  payload: previewUser
});

export const REMOVE_USER = 'REMOVE_USER';
export const removeUser = previewUser => ({
  type: REMOVE_USER,
  payload: previewUser
});

export const SET_SUGGESTED_ADMINS = 'SET_SUGGESTED_ADMINS';
export const setSuggestedAdmins = users => ({
  type: SET_SUGGESTED_ADMINS,
  payload: users
});

export const setSuggestedAdminsByUsername = username => dispatch => {
  dispatch(setSuggestedAdmins([]));
  return fetchUsersByUserName(username)
    .then(users => dispatch(setSuggestedAdmins(users)));
};

export const setSuggestedAdminsByEmail = email => dispatch => {
  dispatch(setSuggestedAdmins([]));
  return fetchUsersByEmail(email)
    .then(users => dispatch(setSuggestedAdmins(users)));
};

