import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { loadingReducer } from './loadingReducer';
import { previewReducer } from './previewReducer';

export default combineReducers({
  authReducer,
  loadingReducer, 
  previewReducer
});
