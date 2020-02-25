import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GroupPreview = () => {

  // const { previewName, previewDevList} = usePreview(); 
  ///// pulled from custom hook - state and that

  const previewName = 'previewGroupName1';

  

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
      <h3>{previewName}</h3>
      <ul>
        {listOfPreviewDevs}
      </ul>
    </section>

  );
};

GroupPreview.propTypes = {};

