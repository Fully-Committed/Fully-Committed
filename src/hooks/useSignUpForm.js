import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const useAuthForm = (type) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (type === 'signup') {
      dispatch(signupUser({
        email,
        userName,
        password
      }));
    } else if(type === 'login') {
      dispatch(loginUser({
        email,
        password
      }));
    }
  };

  return { email, setEmail, password, setPassword, userName, setUserName, handleSubmit };
};
