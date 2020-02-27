import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { groupReducer } from './groupReducer';
import { loadingReducer } from './loadingReducer';
import { previewReducer } from './previewReducer';
import { currentGroupReducer } from './currentGroupReducer';

export default combineReducers({
  currentGroupReducer,
  authReducer,
  loadingReducer, 
  previewReducer,
  groupReducer
});
