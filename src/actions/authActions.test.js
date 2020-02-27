import { SET_USER_SESSION, authorizeUser, clearUserSession } from './authActions';
import { getSignupUser, getLoginUser } from '../services/authServices';

jest.mock('../services/authServices');

describe('Auth actions', () => {
  it('can call the authorize user function with input signup', () => {
    const dispatch = jest.fn();
    const action = authorizeUser({ email: 'jbj@jbj.com', userName: 'JBJ', password: 'JBJ rules' }, getSignupUser);

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_SESSION,
          payload: {
            email: 'jbj@jbj.com',
            userName: 'JBJ'
          }
        });
      });
  });

  it('can call authorize user function with login input', () => {
    const dispatch = jest.fn();
    const action = authorizeUser({ email: 'jbj@jbj.com', password: 'assword' }, getLoginUser);

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_SESSION,
          payload: {
            email: 'jbj@jbj.com'
          }
        });
      });
  });

  it('can call a clear user session action', () => {
    const action = clearUserSession();
    expect(action.type).toEqual('CLEAR_USER_SESSION');
  });
});
