import React from 'react';
import { GroupNameForm } from './groupNameForm/GroupNameForm';
import { AddDevForm } from './addDev/AddDev';
import { GroupPreview } from './groupPreview/GroupPreview';
import { useSelector, useDispatch } from 'react-redux';
import { toGetPreviewDevs, toGetUserSession, toGetPreviewGroupName, toGetPreviewGroupDescription } from '../../selectors/useSelectors';
import { createGroup } from '../../actions/groupActions';
import { Link } from 'react-router-dom';
import styles from './AdminGroupForm.css';

export const AdminGroupForm = () => {
  const devsInGroupArray = useSelector(toGetPreviewDevs);
  const groupName = useSelector(toGetPreviewGroupName);
  const groupDescription = useSelector(toGetPreviewGroupDescription);
  const admin = useSelector(toGetUserSession);
  const dispatch = useDispatch();

  const groupToPost = {
    groupName: groupName,
    groupDescription: groupDescription,
    devsInGroup: devsInGroupArray,
    adminIds: [admin._id]
  };

  const postGroup = group => {
    return dispatch(createGroup(group));
  };

  return (
    <section className={styles.wholeform}>
      <section className={styles.group}>
        <GroupNameForm />
        <AddDevForm />
      </section>
      <section className={styles.preview}>
        <GroupPreview />
        <Link to='/'><button onClick={() => postGroup(groupToPost)}>Create Group</button></Link>
      </section>

    </section>
  );
};

