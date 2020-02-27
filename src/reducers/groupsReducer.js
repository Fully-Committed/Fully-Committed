import { SET_GROUP_SESSION, SET_GROUP_ERROR } from '../actions/groupActions';

const initialState = {
  groups: null,
  error: null,
};

export const groupsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_GROUP_SESSION:
      return { ...state, groups: action.payload };
    case SET_GROUP_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
