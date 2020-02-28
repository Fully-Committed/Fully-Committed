import { SET_GROUP_SESSION, SET_GROUP_ERROR } from '../actions/groupActions';
import { CREATE_GROUP } from '../actions/previewActions';

const initialState = {
  groups: null,
  groupError: null
};

export const groupsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_GROUP:
      return { ...state, groups: [action.payload, ...state.groups.slice(0, 3)] };
    case SET_GROUP_SESSION:
      return { ...state, groups: action.payload };
    case SET_GROUP_ERROR:
      return { ...state, groupError: action.payload };
    default:
      return state;
  }
};
