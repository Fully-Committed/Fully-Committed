import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorizeUser, SET_SESSION_ERROR } from '../actions/authActions';
import { getSignupUser, getLoginUser } from '../services/authServices';

export const useAuthForm = (type) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const authFunction = (type === 'signup') ? getSignupUser : getLoginUser; 

    return dispatch(authorizeUser({ email, userName, password }, authFunction))
      .then(res => {
        if(res.type === SET_SESSION_ERROR) {
          throw new Error('Something went wrong!!!');
        } else {
          window.location.href = (`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=repo, repo:status`);
        }
      });
  };

  return { email, setEmail, password, setPassword, userName, setUserName, handleSubmit };
};
