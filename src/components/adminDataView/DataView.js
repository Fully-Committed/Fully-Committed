import React from 'react';
import { Dev } from './Dev';
import { useGetCommits } from '../../hooks/useGetCommits';
import styles from './DataView.css';

export const DataView = () => {
  const { handleGetCommits, groupCommits, dateInMS, currentGroup } = useGetCommits();

  console.log(currentGroup, 'CURRENT GROUP');


  let sortedCommits;
  if (groupCommits) {
    sortedCommits = groupCommits.sort((dev1, dev2) => {
      return dateInMS(dev1.date) - dateInMS(dev2.date);
    });
  }

  const render = groupCommits ? sortedCommits.map(dev => (<Dev key={dev.date} imageURL={dev.image} timestamp={dev.date} displayName={dev.name} repoName={dev.repoName} commitMessage={dev.message} />)) : <h1>LOADING</h1>;

  return (
    <section className={styles.dataview}>
      <div className={styles.topOfBox}>
        <h2>Group Commits: </h2>
        <button onClick={handleGetCommits}>Refresh Commits</button>
      </div>
      <div>
        {render}
      </div>
    </section>
  );
};
