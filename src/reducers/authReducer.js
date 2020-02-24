import { SET_USER_SESSION } from '../actions/authActions';

const initialState = { user: null };

export const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER_SESSION:
      return { ...state, user: action.payload };
    default:
      return state;

  }
};

//error?
