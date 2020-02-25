import React from 'react';
import { useSelector } from 'react-redux';
import { toGetPreviewGroupName } from '../../../selectors/useSelectors';

export const GroupPreview = () => {
  const groupName = useSelector(toGetPreviewGroupName);

  const previewDevsArray = [
    {
      devName: 'Aaron Glenn', 
      devGitHubHandle: '@aaronedwardglenn'
    }, 
    {
      devName: 'Tess Lameyer', 
      devGitHubHandle: '@tess-jl'
    }
  ];

  const listOfPreviewDevs = previewDevsArray.map(devPreview => (
    <li key={devPreview.devGitHubHandle}>
      <p>{devPreview.devName}</p>
      <p>{devPreview.devGitHubHandle}</p>
    </li>
  ));


  return (
    <section>
      <h2>Group Preview</h2>
      <h3>Group Name: {groupName}</h3>
      <ul>
        {listOfPreviewDevs}
      </ul>
    </section>
  );
};

