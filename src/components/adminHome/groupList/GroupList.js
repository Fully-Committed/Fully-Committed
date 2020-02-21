import React from 'react';
import Group from './group/Group';

const GroupList = () => {
  const groupArray = [
    {
      groupName: 'fall 2019 cohort', 
      groupDescription: 'best cohort ever, spot loves them'
    }, 
    {
      groupName: 'winter 2020 cohort', 
      groupDescription: 'aight'
    }
  ];

  const listOfGroupElements = groupArray.map(group => (
    <li key={group.id}>
      <Group {...group} />
    </li>
  ));

  return (
    <ul>
      {listOfGroupElements}
    </ul>
  );

};

export default GroupList;
