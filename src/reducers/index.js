import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { groupReducer } from './groupReducer';
import { loadingReducer } from './loadingReducer';

export default combineReducers({
  authReducer,
  groupReducer,
  loadingReducer
});
