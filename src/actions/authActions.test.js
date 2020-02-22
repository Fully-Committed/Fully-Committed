import { SIGNUP_USER, signupUser } from './authActions';

jest.mock('../services/authServices');

describe('Auth actions', () => {
  it('can call the signup user action', () => {
    const dispatch = jest.fn();
    const action = signupUser({ email: 'jbj@jbj.com', userName: 'JBJ', password: 'JBJ rules' });

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SIGNUP_USER, 
          payload: {
            email: 'jbj@jbj.com',
            userName: 'JBJ',
            password: 'JBJ rules'
          }
        });
      });
  });
});
