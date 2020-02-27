import React, { useEffect } from 'react';
import { Group } from './Group';
import { useSelector, useDispatch } from 'react-redux';
import { toGetUserSession, toGetGroupArray } from '../../selectors/useSelectors';
import { setGroupArray } from '../../actions/groupActions';
import styles from './GroupList.css';

export const GroupList = () => {
  const dispatch = useDispatch();
  const user = useSelector(toGetUserSession);
  const groupArray = useSelector(toGetGroupArray);

  useEffect(() => {
    if(user) {
      dispatch(setGroupArray(user._id));
    }
  }, []);

  console.log(groupArray);


  const listOfGroupElements = groupArray ? groupArray.map(group => (
    <li key={group._id}>
      <Group {...group} />
    </li>
  )) : <h1>Loading...</h1>;

  return (
    <>
      <ul>
        {listOfGroupElements}
      </ul>
    </>
  );

};
