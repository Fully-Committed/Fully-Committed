import { SET_USER_SESSION, SET_SESSION_ERROR, clearUserSession } from '../actions/authActions';
import { authReducer } from './authReducer';

describe('auth reducer', () => {
  it('handles setting user session', () => {
    const action = {
      type: SET_USER_SESSION,
      payload: {
        email: 'joel@joel.com',
        userName: 'Joel'
      }
    };

    const initialState = { user: null };

    const newState = authReducer(initialState, action);

    expect(newState).toEqual({
      user: {
        email: 'joel@joel.com',
        userName: 'Joel'
      },
      authError: null
    });
  });

  it('handles an auth error action', () => {
    const action = {
      type: SET_SESSION_ERROR,
      payload: 'OH NO!!!!'
    };

    const initialState = { authError: null };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual({ authError: 'OH NO!!!!' });
  });

  it('handles clearing a user', () => {
    const action = clearUserSession();
    const initialState = {
      user: {
        email: 'joel@joel.com'
      },
      authError: {
        error: 'Whatever we want it to be'
      }
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual({
      user: null,
      authError: null
    });
  });

  it('handles unrecognized action', () => {
    const action = {
      type: 'POOP'
    };

    const newState = authReducer(undefined, action);
    expect(newState).toEqual({
      user: null,
      authError: null
    });
  });

});
