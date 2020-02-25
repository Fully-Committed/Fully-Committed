import { turnLoadingOn, turnLoadingOff } from './loadingActions';

export const SET_USER_SESSION = 'SET_USER_SESSION';
export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';

export const authorizeUser = (user, authFunction) => dispatch => {
  dispatch(turnLoadingOn());
  return authFunction(user)
    .then(user => {
      dispatch({ type: SET_USER_SESSION, payload: user });
      return dispatch(turnLoadingOff());
    })
    .catch(error => dispatch({ type: SET_SESSION_ERROR, payload: error }));
};





/*Notes for afterlunch

- in actions, we need to make verify user, and authenticate user? 
  - use effect that checks verify route with user from state as well as checking cookies for a user
  - useEffect (in useVerify hook) called on every page
*/
