import reducer from './previewReducer';

import {
  setPreviewGroupName, 
  addDev,
  removeDev
} from '../actions/previewActions';

describe('Preview Reducer', () => {
//   it('handles the SET_PREVIEW_GROUP_NAME action', () => {

  //   }); 

  it('handles the action it does not understand gracefully', () => {
    const action = { type: 'COOL_ACTION_4_LYFE' }; 
    const initialState = { previewName: 'Calvin Coolidge' };
    const newState = reducer(initialState, action); 
    expect(newState).toEqual({ previewName: 'Calvin Coolidge' });
  });




















});
