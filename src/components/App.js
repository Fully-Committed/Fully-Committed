import React from 'react';
import { useVerifyUser } from '../hooks/useVerifyUser';
import { AuthPage } from './auth/AuthPage';
import Header from './header/Header';

export default function App() {
  useVerifyUser();
  return (
    <>
      <Header />
      <AuthPage />
    </>
  );
}
