import { turnLoadingOn, turnLoadingOff } from './loadingActions';
import { getSignupUser } from '../services/authServices';

export const SIGNUP_USER = 'SIGNUP_USER';

export const signupUser = user => dispatch => {
  dispatch(turnLoadingOn());
  return getSignupUser(user)
    .then(user => {
      dispatch({ type: SIGNUP_USER, payload: user });
      return dispatch(turnLoadingOff());
    });
};
