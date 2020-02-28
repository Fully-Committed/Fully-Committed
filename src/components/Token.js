import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Token = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if(token) localStorage.setItem('token', token);
    if(token) setAccesToken(token);
    window.location.href = './';
  }, []);

  return (<></>);
};
