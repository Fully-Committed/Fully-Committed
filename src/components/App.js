import React from 'react';
import { useVerifyUser } from '../hooks/useVerifyUser';
import { usePreview } from '../hooks/usePreview';
import AdminGroupForm from './adminGroupForm/AdminGroupForm';


export default function App() {
  usePreview();
  return (
    <>
      <AdminGroupForm />
    </>
  );
}
