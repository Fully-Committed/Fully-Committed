import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dev.css';

export const Dev = ({ imageURL, timestamp, displayName, commitMessage, repoName }) => {

  let formattedDate = new Date(timestamp).toString().slice(0, 24);

  return (
    <section className={styles.dev}>
      <section className={styles.devNameAndPic}>
        <img src={imageURL} className={styles.avatar} />
        <div className={styles.devName}>
          <h4>{displayName}</h4>
        </div>
      </section>
      <div className={styles.devRepo}>
        <p><b>Repo:</b></p>
        <p>{repoName}</p>
      </div>
      <div className={styles.devMessage}>
        <p><b>Commit Message:</b></p>
        <p>{commitMessage}</p>
      </div>
      <div className={styles.devTime}>
        <p><b>Timestamp of last commit:</b></p>
        <p>{formattedDate}</p>
      </div>
    </section>
  );
};

Dev.propTypes = {
  imageURL: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  commitMessage: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired
};
