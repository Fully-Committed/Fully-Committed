import React, { useEffect, useState } from 'react';
import { DevList } from './DevList';
import { getDevCommits } from '../../services/adminDataViewServices';

export const DataView = () => {
  const [groupCommits, setGroupCommits] = useState();
  let test = true;
  const handleRefresh = () => getDevCommits('joelpdurham').then(groupCommits => setGroupCommits(groupCommits));

  useEffect(() => {
    if (test) {
      getDevCommits(['jodinkansagor'])
        .then(groupCommits => setGroupCommits(groupCommits));
    }
  }, []);

  const render = groupCommits ? <h1>{groupCommits}</h1> : <h1>No commits</h1>;

  return (
    <>
      <h2>ACPs from groupName</h2>
      <button onClick={handleRefresh}>refresh</button>
      {render}
      {/* <DevList /> */}
    </>
  );
};
