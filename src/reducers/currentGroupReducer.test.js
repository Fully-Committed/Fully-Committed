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
      groupName: 'group'
    });
  });

  it('can replace previous current with new current group', () => {
    const action = setCurrentGroup({
      groupName: 'group2'
    });

    const initialState = { currentGroup: 'group' };
    const newState = currentGroupReducer(initialState, action);
    expect(newState).toEqual({
      groupName: 'group2'
    });
  });
});
