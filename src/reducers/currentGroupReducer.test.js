import { setCurrentGroup } from '../actions/currentGroupAction';
import { currentGroupReducer } from './currentGroupReducer';

describe('current group reducer', () => {
  it('can set a current group in state', () => {
    const action = setCurrentGroup({
      groupName: 'group'
    });

    const initialState = { currentGroup: null };
    const newState = currentGroupReducer(initialState, action);
    expect(newState).toEqual({
      currentGroup: {
        groupName: 'group'
      }
    });
  });

  it('can replace previous current with new current group', () => {
    const action = setCurrentGroup({
      groupName: 'group2'
    });

    const initialState = { currentGroup: 'group' };
    const newState = currentGroupReducer(initialState, action);
    expect(newState).toEqual({
      currentGroup: {
        groupName: 'group2'
      }
    });
  });

  it('handles default', () => {
    const action = {
      type: 'POOP'
    };

    const newState = currentGroupReducer(undefined, action);
    expect(newState).toEqual({
      currentGroup: null
    });
  });
});
