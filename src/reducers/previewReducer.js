import { 
  SET_PREVIEW_GROUP_NAME,
  ADD_DEV,
  REMOVE_DEV
} from '../actions/previewActions';

const initialState = { 
  previewName: 'New Group',
  previewDev: {},

};

export default function reducer(state = initialState, action){
  switch(action.type) {
    case SET_PREVIEW_GROUP_NAME:
      return { ...state, previewName: action.payload };
    case ADD_DEV: 
      return { ...state, previewDev: action.payload };
      
    default: 
      return state; 
  }
}


