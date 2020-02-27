import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentGroup } from '../../actions/currentGroupAction';


export const Group = ({ groupName, groupDescription, devsInGroup }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGroup(devsInGroup));

  };

  return (
    <section onClick={handleClick}>
      <h2>{groupName}</h2>
      <p>{groupDescription}</p>
    </section>
  );
};

Group.propTypes = {
  devsInGroup: PropTypes.array.isRequired,
  groupName: PropTypes.string.isRequired,
  groupDescription: PropTypes.string

};
