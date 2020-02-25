import React, { useEffect, useState } from 'react';
import { DevList } from './DevList';
import { getDevCommits } from '../../services/adminDataViewServices';
import { Dev } from './Dev';

export const DataView = () => {
  const [groupCommits, setGroupCommits] = useState();

  useEffect(() => {
    getDevCommits(['jodinkansagor', 'joelpdurham', 'tess-jl', 'aaronedwardglenn'])
      .then(groupCommits => {
        setGroupCommits(groupCommits);
      });
  }, []);

  const render = groupCommits ? groupCommits.map(dev => (<Dev key={dev.date} imageURL={dev.image} timestamp={dev.date} displayName={dev.name} repoName={dev.repoName} commitMessage={dev.message} />)) : <h1>LOADING</h1>;

  return (
    <>
      <h2>ACPs from groupName</h2>
      <button>refresh</button>
      <div>
        {render}
      </div>
      {/* <DevList /> */}
    </>
  );
};
