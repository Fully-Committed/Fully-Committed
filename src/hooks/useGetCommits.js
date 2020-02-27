import { useSelector } from 'react-redux';
import { toGetCurrentGroup } from '../selectors/useSelectors';
import { useEffect, useState } from 'react';
import { getDevCommits } from '../services/adminDataViewServices';

export const useGetCommits = () => {
  const [groupCommits, setGroupCommits] = useState();
  const currentGroup = useSelector(toGetCurrentGroup);

  useEffect(() => {
    handleGetCommits();
  }, [currentGroup]);

  const dateInMS = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.getTime();
  };

  const handleGetCommits = () => {
    if (currentGroup) {
      console.log(currentGroup);
      const groupNames = currentGroup.map(dev => (
        {
          name: dev.devName,
          gitHubHandle: dev.devGitHubHandle
        }
      ));
      getDevCommits(groupNames)
        .then(groupCommits => {
          setGroupCommits(groupCommits);
        });
    }
  };

  return { handleGetCommits, groupCommits, dateInMS, currentGroup };
};
