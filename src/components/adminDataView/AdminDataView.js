import React from 'react';
import { GroupList } from './GroupList';
import { DataView } from './DataView';
import styles from './AdminDataView.css';
// import { useLocation } from 'react-router-dom';

export const AdminDataView = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const token = params.get('token');
  //   if(token) {
  //     localStorage.setItem('token', token);
  //     window.location.href = './';
  //   }
  // }, []);
  
  return (
    <section className={styles.admindata}>
      <GroupList />
      <DataView />
    </section>
  );
};
