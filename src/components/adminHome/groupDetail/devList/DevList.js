import React from 'react';
import Dev from './dev/Dev';

const DevList = () => {

  const array = [
    {
      imageURL: 'https://placebear.com/100/100',
      timestamp: '9249359', 
      displayName: 'dev display name 1',
      repoName: 'repo1', 
      commitMessage: 'hello this is my commit'
    }, 
    {
      imageURL: 'https://placebear.com/101/100',
      timestamp: '92493654', 
      displayName: 'dev display name 2',
      repoName: 'repo2', 
      commitMessage: 'hello this is my commit2'
    }
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
