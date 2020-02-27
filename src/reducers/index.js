import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { groupsReducer } from './groupsReducer';
import { loadingReducer } from './loadingReducer';
import { currentGroupReducer } from './currentGroupReducer';

export default combineReducers({
  currentGroupReducer,
  authReducer,
  groupsReducer,
  loadingReducer
});
