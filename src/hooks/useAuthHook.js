import React, { createContext, useEffect, useContext } from 'react';
import { authReducer } from '../reducers/authReducer.js';
import { signupUser, loginUser, verifyUser } from '../services/auth';
import { setSession, setSessionError, setSessionLoading, setSessionDone } from '../actions/authActions';
import { isAuthenticated, isLoading } from '../selectors/authSelectors';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    loading: true,
    user: null,
    error: null
  });

  useEffect(() => {
    dispatch(setSession());
    verifyUser()
      .then(user => dispatch(setSession(user)))
      .catch(() => dispatch(setSessionDone()));
  }, []);

  const signup = (email, password, userName) => {
    dispatch(setSessionLoading());
    return signupUser(email, password, userName)
      .then(user => dispatch(setSession(user)))
      .catch(error => dispatch(setSessionError(error)));
  };

  const login = (email, password) => {
    dispatch(setSessionLoading());
    return loginUser(email, password)
      .then(user => dispatch(setSession(user)))
      .catch(error => dispatch(setSessionError(error)));
  };


  return (
    <AuthContext.Provider value={{ state, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

export const useIsAuthenticated = () => {
  const { state } = useContext(AuthContext);
  return isAuthenticated(state);
};

export const useIsLoading = () => {
  const { state } = useContext(AuthContext);
  return isLoading(state);
};
