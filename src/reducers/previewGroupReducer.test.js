import { previewGroupReducer } from './previewGroupReducer';

import {
  setPreviewGroupName, 
  ADD_DEV,
  REMOVE_DEV
} from '../actions/previewActions';

describe('Preview Reducer', () => {
  it('handles the action it does not understand gracefully', () => {
    const action = { type: 'COOL_ACTION_4_LYFE' }; 
    const initialState = { previewName: 'Calvin Coolidge' };
    const newState = previewGroupReducer(initialState, action); 

    expect(newState).toEqual({ previewName: 'Calvin Coolidge' });
  });

  it('handles the SET_PREVIEW_GROUP_NAME action', () => {
    const action = setPreviewGroupName('preview name'); 
    const initialState = { previewName: 'New Group' };
    const newState = previewGroupReducer(initialState, action); 
    
    expect(newState).toEqual({ previewName: 'preview name' });
  }); 

  it('handles the ADD_DEV action', () => {
    const action = {
      type: ADD_DEV,
      payload: { 
        _id: '1235', 
        devName: 'aaron', 
        devGitHubHandle: '@aaronedwardglenn' 
      }
    }; 

    const initialState = { 
      previewDevs: [{ 
        _id: '1234', 
        devName: 'tess', 
        devGitHubHandle: '@tess-jl'  
      }] 
    };
    const newState = previewGroupReducer(initialState, action); 
    
    expect(newState).toEqual({ 
      previewDevs: [
        { _id: '1234', devName: 'tess', devGitHubHandle: '@tess-jl'  },
        { _id: '1235', devName: 'aaron', devGitHubHandle: '@aaronedwardglenn'  },
      ],
      suggestedDevs: []
    });
  }); 

  it('handles the REMOVE_DEV action', () => {
    const action = {
      type: REMOVE_DEV,
      payload: { 
        _id: '1235', 
        devName: 'aaron', 
        devGitHubHandle: '@aaronedwardglenn' 
      }
    }; 

    const initialState = { 
      previewDevs: [{ 
        _id: '1234', 
        devName: 'tess', 
        devGitHubHandle: '@tess-jl' 
      },
      { 
        _id: '1235', 
        devName: 'aaron', 
        devGitHubHandle: '@aaronedwardglenn' 
      }] 
    };
    const newState = previewGroupReducer(initialState, action); 
    
    expect(newState).toEqual({ 
      previewDevs: [{ 
        _id: '1234', 
        devName: 'tess', 
        devGitHubHandle: '@tess-jl' 
      }]
    });
  }); 

});
