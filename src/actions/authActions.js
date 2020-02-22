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


/*Notes for monday

- in actions, we need to make login user, verify user, and authenticate user? 
- make reducer for authUser
- make selector for authUser

what about error?
