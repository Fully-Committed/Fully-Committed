import React from 'react';
import { useSelector } from 'react-redux';
import { toGetPreviewGroupName, toGetPreviewDevs, toGetPreviewGroupDescription } from '../../../selectors/useSelectors';
import { usePreview } from '../../../hooks/useGroupPreview';

export const GroupPreview = () => {
  const groupName = useSelector(toGetPreviewGroupName);
  const groupDescription = useSelector(toGetPreviewGroupDescription);
  const previewDevsArray = useSelector(toGetPreviewDevs);  

  const { handleRemoveDevFromPreview } = usePreview(); 

  const listOfPreviewDevs = previewDevsArray.map(devPreview => {
    
    return (
      <li key={devPreview._id}>
        <p>{devPreview.devName}</p>
        <p>{devPreview.devGitHubHandle}</p>
        <button onClick={()=> handleRemoveDevFromPreview(devPreview)}>X</button>
      </li>
    );
  });

  return (
    <section>
      <h2>Group Preview</h2>
      <h3>Group Name: {groupName}</h3>
      <h3>Group Description: {groupDescription}</h3>
      <ul>
        {listOfPreviewDevs}
      </ul>
    </section>
  );
};

