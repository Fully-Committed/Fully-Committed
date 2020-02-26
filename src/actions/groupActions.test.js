import { SET_GROUP_SESSION, setGroupArray } from './groupActions';

jest.mock('../services/adminDataViewServices.js');

describe('Group actions', () => {
  it('can call an action to set group session', () => {
    const dispatch = jest.fn();
    const action = setGroupArray('adminId');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
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
        });
      });
  });
});
