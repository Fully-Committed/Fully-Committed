import React from 'react';
import { GroupList } from './GroupList';
import { DataView } from './DataView';
import styles from './AdminDataView.css';

export const AdminDataView = () => (
  <section className={styles.admindata}>
    <GroupList />
    <DataView />
  </section>
);
