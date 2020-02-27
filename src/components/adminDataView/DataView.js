import React from 'react';
import { DevList } from './DevList';
import { Dev } from './Dev';
import { useGetCommits } from '../../hooks/useGetCommits';

export const DataView = () => {
  const { handleGetCommits, groupCommits, dateInMS } = useGetCommits();

  let sortedCommits;
  if(groupCommits) {
    sortedCommits = groupCommits.sort((dev1, dev2) => {
      return dateInMS(dev1.date) - dateInMS(dev2.date);
    });
  }

  const render = groupCommits ? sortedCommits.map(dev => (<Dev key={dev.date} imageURL={dev.image} timestamp={dev.date} displayName={dev.name} repoName={dev.repoName} commitMessage={dev.message} />)) : <h1>LOADING</h1>;

  return (
    <>
      <h2>ACPs from groupName</h2>
      <button onClick={handleGetCommits}>refresh</button>
      <div>
        {render}
      </div>
      {/* <DevList /> */}
    </>
  );
};
