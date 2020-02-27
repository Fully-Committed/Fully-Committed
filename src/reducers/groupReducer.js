import { SET_GROUP_SESSION, SET_GROUP_ERROR, ADD_GROUP } from '../actions/groupActions';

const initialState = {
  groups: [],
  groupError: null
};

export const groupReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_GROUP: 
      return { ...state, groups: [...state.groups, action.payload] };
    case SET_GROUP_SESSION:
      return { ...state, groups: action.payload };
    case SET_GROUP_ERROR:
      return { ...state, groupError: action.payload };
    default:
      return state;
  }
};
