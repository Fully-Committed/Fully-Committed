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

  const render = groupCommits ? sortedCommits.map(dev => (<Dev key={dev.date} imageURL={dev.image} timestamp={dev.date} displayName={dev.name} repoName={dev.repoName} commitMessage={dev.message} />)) : <div className={styles.watermark}><img className={styles.githubwatermark} src='https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png' /></div>;

  return (
    <section className={styles.dataview}>
      <div className={styles.topOfBox}>
        <h2>Group Commits: </h2>
        <button className={styles.refresh} onClick={handleGetCommits}>Refresh Commits</button>
      </div>
      <div>
        {render}
      </div>
    </section>
  );
};
