import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddNewDev = () => {
  const [displayName, setDisplayName] = useState('');
  const [gitHubUserName, setGitHubUserName] = useState('');

  const handleSubmit = () => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Dev</h1>
      <h2>Dev Display Name</h2>
      <input type="text" value="displayName" onChange={({ target }) => setDisplayName(target.value)} />
      <h2>Github User Name</h2>
      <input type="text" value="gitHubUserName" onChange={({ target }) => setGitHubUserName(target.value)} />
      <button>Add Dev</button>
    </form>
  )
};

AddNewDev.propTypes = {};

export default AddNewDev;