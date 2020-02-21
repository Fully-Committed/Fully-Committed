import React from 'react';
import Dev from './dev/Dev';

const DevList = () => {

  const array = [

  ];

  const listOfDevElements = array.map(dev => (
    <li key={dev.id}>
      <Dev {...dev} />
    </li>
  ));


  return (
    <ul>
      {listOfDevElements}
    </ul>
  );

};

export default DevList;
