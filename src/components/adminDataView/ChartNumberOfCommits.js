import React from 'react';
import { useGetCommits } from '../../hooks/useGetCommits';

export const ChartNumberOfCommits = () => {
  const { handleGetCommits, groupCommits } = useGetCommits();

  console.log(handleGetCommits, 'this is handle get commits');
  console.log(groupCommits, 'this is group commits');


  return (
    <>
      {/* where the chart will go */}
    </>
  );
};
