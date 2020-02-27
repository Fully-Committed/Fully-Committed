import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dev.css';

export const Dev = ({ imageURL, timestamp, displayName, commitMessage, repoName }) => {

  let formattedDate = new Date(timestamp).toString().slice(0, 24);

  return (
    <section className={styles.dev}>
      <img src={imageURL} />
      <h4>Name: {displayName}</h4>
      <p><b>Repo:</b> {repoName}</p>
      <p><b>Commit Message:</b> {commitMessage}</p>
      <p><b>Timestamp of last commit:</b> {formattedDate}</p>
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
