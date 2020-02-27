import React from 'react';
import { Dev } from './Dev';

export const DevList = (render) => {

  

  const listOfDevElements = render.map(dev => (
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

