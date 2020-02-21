import React from 'react';
import PropTypes from 'prop-types';

const Group = ({ groupName, groupDescription }) => {
  return (
    <>
      <h2>{groupName}</h2>
      <p>{groupDescription}</p>
    </>
  );
};

Group.propTypes = {
  groupName: PropTypes.string.isRequired,
  groupDescription: PropTypes.string.isRequired
};

export default Group;
