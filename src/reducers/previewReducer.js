import { 
  SET_PREVIEW_GROUP_NAME,
  ADD_DEV,
  REMOVE_DEV
} from '../actions/previewActions';

const initialState = { 
  previewName: 'New Group',
  previewDevs: []
};

export const previewReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PREVIEW_GROUP_NAME:
      return { ...state, previewName: action.payload };
    case ADD_DEV: 
      return { ...state, previewDevs: [...state.previewDevs, action.payload] };
    case REMOVE_DEV: 
      return { ...state, previewDevs: state.previewDevs.filter(dev => dev._id !== action.payload._id) }; 

    default: 
      return state; 
  }
};

//CREATE_DEV
