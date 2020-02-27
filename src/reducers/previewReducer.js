import { 
  SET_PREVIEW_GROUP_NAME,
  ADD_DEV,
  REMOVE_DEV,
  SET_SUGGESTED_DEVS, 
  SET_PREVIEW_GROUP_DESCRIPTION
} from '../actions/previewActions';

const initialState = { 
  previewName: 'New Group',
  previewDescription: '',
  previewDevs: [], 
  suggestedDevs: []
};

export const previewReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PREVIEW_GROUP_NAME:
      return { ...state, previewName: action.payload };
    case SET_PREVIEW_GROUP_DESCRIPTION:
      return { ...state, previewDescription: action.payload };
    case SET_SUGGESTED_DEVS:
      return { ...state, suggestedDevs: action.payload };
    case ADD_DEV: 
      return { ...state, previewDevs: [...state.previewDevs, action.payload], suggestedDevs: [] };
    case REMOVE_DEV: 
      return { ...state, previewDevs: state.previewDevs.filter(dev => dev._id !== action.payload._id) }; 

    default: 
      return state; 
  }
};

//CREATE_DEV
