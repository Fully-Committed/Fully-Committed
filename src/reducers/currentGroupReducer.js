import { SET_CURRENT_GROUP } from '../actions/currentGroupAction';

const initialState = {
  currentGroup: null
};

export const currentGroupReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_GROUP:
      return { ...state, currentGroup: action.payload };
  }
};
