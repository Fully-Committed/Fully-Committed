import { SET_GROUP_SESSION, SET_GROUP_ERROR } from '../actions/groupActions';
import { groupReducer } from './groupReducer';

describe('group reducer', () => {
  it('handles set grouparray', () => {
    const action = {
      type: SET_GROUP_SESSION,
      payload: [{
        admindIds: ['12', '34', 'adminId'],
        devsInGroups: [{
          devName: 'dev1',
          devGitHubHandle: 'gitbud'
        }, {
          devName: 'dev2',
          devGitHubHandle: 'gitfriend'
        }],
        groupName: 'My group'
      }]
    };

    const initialState = {
      groups: []
    };

    const newState = groupReducer(initialState, action);
    expect(newState).toEqual({
      groups: [{
        admindIds: ['12', '34', 'adminId'],
        devsInGroups: [{
          devName: 'dev1',
          devGitHubHandle: 'gitbud'
        }, {
          devName: 'dev2',
          devGitHubHandle: 'gitfriend'
        }],
        groupName: 'My group'
      }]
    });  
  });

  it('handles group error', () => {
    const action = {
      type: SET_GROUP_ERROR,
      payload: 'SHHHIIIIIIT'
    };

    const newState = groupReducer(undefined, action);
    expect(newState).toEqual({
      groups: null,
      error: 'SHHHIIIIIIT'
    });
  });

  it('handles default', () => {
    const action = {
      type: 'POOP'
    }

    const newState = groupReducer(undefined, action)
    expect(newState).toEqual({
      groups: null, 
      error: null
    });
  });
});
