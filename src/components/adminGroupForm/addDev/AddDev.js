import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddDev = () => {
  const [displayName, setDisplayName] = useState('');
  const [gitHubUserName, setGitHubUserName] = useState('');

  const handleDevSubmit = () => {
    event.preventDefault();
    //// conditionally dipatch action to check GitHub for GitHub hanlde
    //// dispatch action to display in preview
  };


  return (
    <>

      <form onSubmit={handleDevSubmit}>
        <h1>Add Dev</h1>
        <h2>Dev Name</h2>
        <input type="text" value="displayName" onChange={({ target }) => setDisplayName(target.value)} />
        <h2>Github Handle</h2>
        <input type="text" value="gitHubUserName" onChange={({ target }) => setGitHubUserName(target.value)} />
        <button>Add Dev</button>
      </form>

      <section>
        <h2>Group Preview</h2>
      </section>

    </>
  );
};

AddDev.propTypes = {};

