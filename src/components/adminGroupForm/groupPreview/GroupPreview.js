import React from 'react';
import { useSelector } from 'react-redux';
import { toGetPreviewGroupName, toGetPreviewDevs } from '../../../selectors/useSelectors';

export const GroupPreview = () => {
  const groupName = useSelector(toGetPreviewGroupName);
  const previewDevsArray = useSelector(toGetPreviewDevs);

  console.log(previewDevsArray, 'this is prev devs arr');

  const listOfPreviewDevs = previewDevsArray.map(devPreview => (
    <li key={devPreview._id}>
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

