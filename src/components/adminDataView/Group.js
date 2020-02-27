import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentGroup } from '../../actions/currentGroupAction';


export const Group = ({ groupName, devsInGroup, _id }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGroup(devsInGroup));

  };

  return (
    <>
      <input type="radio" name="groups" id={_id} value={groupName} onClick={handleClick} />
      <label htmlFor={_id}>{groupName}</label>
    </>
  );
};

Group.propTypes = {
  devsInGroup: PropTypes.array.isRequired,
  groupName: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired

};

