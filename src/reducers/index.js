import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { groupsReducer } from './groupsReducer';
import { loadingReducer } from './loadingReducer';
import { previewGroupReducer } from './previewGroupReducer';
import { currentGroupReducer } from './currentGroupReducer';

export default combineReducers({
  currentGroupReducer,
  authReducer,
  loadingReducer, 
  previewGroupReducer,
  groupsReducer
});
