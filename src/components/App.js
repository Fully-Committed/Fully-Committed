import React from 'react';
import { useVerifyUser } from '../hooks/useVerifyUser';
import { AuthPage } from './auth/AuthPage';

export default function App() {
  //useVerifyUser();
  return (
    <>
      <AuthPage />
    </>
  );
}
