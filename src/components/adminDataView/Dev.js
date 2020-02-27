import React from 'react';
import PropTypes from 'prop-types';

export const Dev = ({ imageURL, timestamp, displayName, commitMessage, repoName }) => {

  let formattedDate = new Date(timestamp).toString().slice(0, 24);

  return (
    <>
      <img src={imageURL} />
      <h4>Name: {displayName}</h4>
      <p>Repo: {repoName}</p>
      <p>Commite Message: {commitMessage}</p>
      <p>Timestamp of last commit: {formattedDate}</p>
    </>
  );
};

Dev.propTypes = {
  imageURL: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  commitMessage: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired
};
