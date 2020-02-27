import React from 'react';
import { useSelector } from 'react-redux';
//importing toGetPreviewUsers from our selectors
//importing useGroupAdminsPreview custom hook

export const GroupPreview = () => {
  const previewUsersArray = useSelector(toGetPreviewUsers);  
  const { handleRemoveUserFromPreview } = useGroupAdminsPreview(); 

  const listOfPreviewDevs = previewUsersArray.map(userPreview => (
    <li key={userPreview._id}>
      <p>{userPreview.userName}</p>
      <p>{userPreview.email}</p>
      <button onClick={()=> handleRemoveUserFromPreview (userPreview)}>X</button>
    </li>
  ));
 

  return (
    <section>
      <h2>Group Admins Preview</h2>
      <ul>
        {listOfPreviewDevs}
      </ul>
    </section>
  );
};
