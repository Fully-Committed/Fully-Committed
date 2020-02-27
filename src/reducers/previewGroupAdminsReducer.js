import { 
  ADD_USER,
  REMOVE_USER,
  SET_SUGGESTED_USERS
} from '../actions/previewAdminsActions';

const initialState = { 
  previewUsers: [], 
  suggestedAdmins: []
};

export const previewGroupAdminsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SUGGESTED_USERS:
      return { ...state, suggestedAdmins: action.payload };
    case ADD_USER: 
      return { ...state, previewUsers: [...state.previewUsers, action.payload], suggestedAdmins: [] };
    case REMOVE_USER: 
      return { ...state, previewUsers: state.previewUsers.filter(user => user._id !== action.payload._id) }; 

    default: 
      return state; 
  }
};

