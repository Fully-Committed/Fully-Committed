import reducer from './previewReducer';

import {
  setPreviewGroupName, 
  addDev,
  removeDev
} from '../actions/previewActions';

describe('Preview Reducer', () => {
  it('handles the action it does not understand gracefully', () => {
    const action = { type: 'COOL_ACTION_4_LYFE' }; 
    const initialState = { previewName: 'Calvin Coolidge' };
    const newState = reducer(initialState, action); 

    expect(newState).toEqual({ previewName: 'Calvin Coolidge' });
  });

  it('handles the SET_PREVIEW_GROUP_NAME action', () => {
    const action = setPreviewGroupName('preview name'); 
    const initialState = { previewName: 'New Group' };
    const newState = reducer(initialState, action); 
    
    expect(newState).toEqual({ previewName: 'preview name' });
  }); 

  it('handles the ADD_DEV action', () => {
    const action = addDev({ _id: '1234', devName: 'tess', devGitHubHandle: '@tess-jl' }); 
    const initialState = { previewDev: {} };
    const newState = reducer(initialState, action); 
    
    expect(newState).toEqual({ 
      previewDev: { 
        _id: '1234', 
        devName: 'tess', 
        devGitHubHandle: '@tess-jl' 
      } 
    });
  }); 

  it('handles the REMOVE_DEV action', () => {
    const action = removeDev({ }); 
    const initialState = { 
      previewDev: { 
        _id: '1234', 
        devName: 'tess', 
        devGitHubHandle: '@tess-jl' 
      } 
    };
    const newState = reducer(initialState, action); 
    
    expect(newState).toEqual({ 
      previewDev: { } 
    });
  }); 

});
