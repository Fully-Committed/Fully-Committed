import { 
  SET_PREVIEW_GROUP_NAME,
  SET_PREVIEW_GROUP_DESCRIPTION,
  ADD_DEV,
  REMOVE_DEV,
  SET_SUGGESTED_DEVS
} from '../actions/previewGroupActions';

const initialState = { 
  previewName: null,
  previewDescription: '',
  previewDevs: [], 
  suggestedDevs: []
};

export const previewGroupReducer = (state = initialState, action) => {
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

