import { SET_USER_SESSION, SET_SESSION_ERROR } from '../actions/authActions';

const initialState = { 
  user: null, 
  authError: null 
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_SESSION:
      return { ...state, user: action.payload };
    case SET_SESSION_ERROR:
      return { ...state, authError: action.payload };
    default:
      return state;

  }
};
