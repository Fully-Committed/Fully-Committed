import React, { useEffect, useState } from 'react';
import { DevList } from './DevList';
import { getDevCommits } from '../../services/adminDataViewServices';

export const DataView = () => {
  const [groupCommits, setGroupCommits] = useState({ 
    message: '',
    date: '',
  });

  useEffect(() => {
    getDevCommits('jodinkansagor')
      .then(groupCommits => {
        console.log(groupCommits);
        setGroupCommits({
          message: groupCommits.message,
          date: groupCommits.date 
        });
      });
  }, []);

  const render = groupCommits ? (
    <>
      <h1>{groupCommits.message}</h1>
      <p>{groupCommits.date}</p>
    </>) : <h1>No commits</h1>;

  return (
    <>
      <h2>ACPs from groupName</h2>
      <button>refresh</button>
      {render}
      {/* <DevList /> */}
    </>
  );
};
