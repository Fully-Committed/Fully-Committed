import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchExistingDev = () => {
  const [devName, setDevName] = useState('');

  const handleSubmit = () => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Search Existing Devs</h2>
      <input type="text" value={devName} onChange={({ target }) => setDevName(target.value)} id={id}/>
      <button>Search</button>
    </form>
  )
}

SearchExistingDev.propTypes = {};

export default SearchExistingDev;