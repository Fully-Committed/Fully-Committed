import React from 'react';
import { GroupList } from './GroupList';
import { DataView } from './DataView';
import styles from './AdminDataView.css'

export const AdminDataView = () => {
  
  return (
    <section className={styles.admindata}>
      <GroupList />
      <DataView />
    </section>
  );
};
