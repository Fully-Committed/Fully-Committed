import React from 'react';
import PropTypes from 'prop-types';

const Dev = ({ imageURL, timestamp, displayName, commitMessage, repoName }) => {

  return (
    <>
      <img src={imageURL} />
      <h4>{displayName}</h4>
      <p>{repoName}</p>
      <p>{commitMessage}</p>
      <p>{timestamp}</p>
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

export default Dev;
