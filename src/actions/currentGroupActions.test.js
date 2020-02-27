import { SET_CURRENT_GROUP, setCurrentGroup, clearCurrentGroup } from './currentGroupAction';

describe('Current group actions', () => {
  it('can call set current group', () => {
    const action = setCurrentGroup({
      _id: '12323rwer',
      groupName: 'group1',
      groupDescription: 'cool group',
      devsInGroup: [{}, {}]
    });

    expect(action).toEqual({
      type: SET_CURRENT_GROUP,
      payload: {
        _id: '12323rwer',
        groupName: 'group1',
        groupDescription: 'cool group',
        devsInGroup: [{}, {}]
      }
    });
  });

  it('can clear current group', () => {
    const action = clearCurrentGroup();
    expect(action.type).toEqual('CLEAR_CURRENT_GROUP');
  })
})