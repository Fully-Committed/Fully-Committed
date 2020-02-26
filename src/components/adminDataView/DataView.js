import React, { useEffect, useState } from 'react';
import { DevList } from './DevList';
import { getDevCommits } from '../../services/adminDataViewServices';
import { Dev } from './Dev';
import { useSelector } from 'react-redux';
import { toGetCurrentGroup } from '../../selectors/useSelectors';

export const DataView = () => {
  const [groupCommits, setGroupCommits] = useState();

  const currentGroup = useSelector(toGetCurrentGroup);

  useEffect(() => {
    if(currentGroup) {
      const groupNames = currentGroup.map(dev => dev.devGitHubHandle);
      getDevCommits(groupNames)
        .then(groupCommits => {
          setGroupCommits(groupCommits);
        });
    }
  }, [currentGroup]);

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
