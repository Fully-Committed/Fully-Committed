import React, { useEffect } from 'react';
import { GroupList } from './GroupList';
import { DataView } from './DataView';
import styles from './AdminDataView.css';
import { useLocation } from 'react-router-dom';
import { setAccesToken } from '../../services/adminDataViewServices';


export const AdminDataView = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if(token) setAccesToken(token);
  }, []);
  
  return (
    <section className={styles.admindata}>
      <GroupList />
      <DataView />
    </section>
  );
};
