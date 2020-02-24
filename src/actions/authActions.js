import { turnLoadingOn, turnLoadingOff } from './loadingActions';

export const SET_USER_SESSION = 'SET_USER_SESSION';

export const authorizeUser = (user, authFunction) => dispatch => {
  dispatch(turnLoadingOn());
  return authFunction(user)
    .then(user => {
      dispatch({ type: SET_USER_SESSION, payload: user });
      return dispatch(turnLoadingOff());
    }); 
};





/*Notes for monday

- in actions, we need to make verify user, and authenticate user? 
- make reducer for authUser
- make selector for authUser

what about error?
What about services?
*/
