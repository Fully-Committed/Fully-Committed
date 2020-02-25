import React from 'react';
import { useVerifyUser } from '../hooks/useVerifyUser';
import AdminGroupForm from './adminGroupForm/AdminGroupForm';


export default function App() {
  useVerifyUser();
  return (
    <>
      <AdminGroupForm />
    </>
  );
}
