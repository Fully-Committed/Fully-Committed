import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Group = ({ groupName, groupDescription }) => {
  return (
    <Link>
      <h2>{groupName}</h2>
      <p>{groupDescription}</p>
    </Link>
  );
};

Group.propTypes = {
  groupName: PropTypes.string.isRequired,
  groupDescription: PropTypes.string.isRequired
};
