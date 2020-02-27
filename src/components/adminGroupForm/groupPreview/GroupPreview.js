import React from 'react';
import { useSelector } from 'react-redux';
import { toGetPreviewGroupName, toGetPreviewDevs } from '../../../selectors/useSelectors';
import { usePreview } from '../../../hooks/usePreview';

export const GroupPreview = () => {
  const groupName = useSelector(toGetPreviewGroupName);
  const previewDevsArray = useSelector(toGetPreviewDevs);
  console.log(previewDevsArray, 'PREVIEW DEVS ARRAY');
  
  const { handleRemoveDevFromPreview } = usePreview(); 

  const listOfPreviewDevs = previewDevsArray.map(devPreview => {
    console.log(devPreview, 'DEVPREVIEWWWW');
    
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
      <ul>
        {listOfPreviewDevs}
      </ul>
    </section>
  );
};

