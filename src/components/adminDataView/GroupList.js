import React, { useEffect, useState } from 'react';
import { Group } from './Group';
import { getGroups } from '../../services/adminDataViewServices';
import { useSelector } from 'react-redux';
import { toGetUserSession } from '../../selectors/useSelectors';

export const GroupList = () => {
  const user = useSelector(toGetUserSession);
  const [groupArray, setGroupArray] = useState([]);
  console.log(user);

  useEffect(() => {
    return getGroups()
      .then(setGroupArray);
  }, []);

  const listOfGroupElements = groupArray.map(group => (
    <li key={group._id}>
      <Group {...group} />
    </li>
  ));

  return (
    <ul>
      {listOfGroupElements}
    </ul>
  );

};
