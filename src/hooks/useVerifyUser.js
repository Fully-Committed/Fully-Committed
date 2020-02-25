import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authorizeUser } from '../actions/authActions';
import { getVerifyUser } from '../services/authServices';

export const useVerifyUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(authorizeUser('', getVerifyUser));
  }, []);
};
