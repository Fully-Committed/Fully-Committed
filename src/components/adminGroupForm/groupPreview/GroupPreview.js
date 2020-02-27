import React from 'react';
import { useSelector } from 'react-redux';
import { toGetPreviewGroupName, toGetPreviewDevs, toGetPreviewGroupDescription } from '../../../selectors/useSelectors';
import { usePreview } from '../../../hooks/usePreview';
import styles from './GroupPreview.css';

export const GroupPreview = () => {
  const groupName = useSelector(toGetPreviewGroupName);
  const groupDescription = useSelector(toGetPreviewGroupDescription);
  const previewDevsArray = useSelector(toGetPreviewDevs);

  const { handleRemoveDevFromPreview } = usePreview();

  const listOfPreviewDevs = previewDevsArray.map(devPreview => {

    return (
      <li key={devPreview._id} className={styles.previewLi}>
        <p className={styles.previewDevName}>{devPreview.devName}</p>
        <p className={styles.previewDevName}>{devPreview.devGitHubHandle}</p>
        <button onClick={() => handleRemoveDevFromPreview(devPreview)}>Remove</button>
      </li>
    );
  });

  return (
    <section className={styles.preview}>
      <h2>Group Preview</h2>
      <section className={styles.groupnamepreview}>
        <section className={styles.individualpreview}>
          <h4>Group Name:</h4>
          <p>{groupName}</p>
        </section>
        <section className={styles.individualpreview}>

          <h4>Group Description:</h4>
          <p>{groupDescription}</p>
        </section>
      </section>
      <ul>
        {listOfPreviewDevs}
      </ul>
    </section>
  );
};

