import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDevsByName, fetchDevsByGitHubHandle } from '../services/adminGroupFormServices';


export const useAddDev = () => {
  const [devName, setDevName] = useState('');
  const [devGitHubHandle, setDevGitHubHandle] = useState('');
  const [suggestedNamesList, setSuggestedNamesList] = useState([]);
  const [suggestedHandlesList, setSuggestedHandlesList] = useState([]);
  
  const dispatch = useDispatch();

  const handleNameInputChange = ({ target }) => {
    setDevName(target.value);
  };
  const handleNameSearch = () => {
    return fetchDevsByName(devName)
      .then(list => {
        if(list) {
          console.log('this is the current list from fetching name', list);
          setSuggestedNamesList(list);
          setSuggestedHandlesList(list);
        }});
  };
  useEffect(() => {
    handleNameSearch();
  }, [devName]);


  const handleGitHubHandleInputChange = ({ target }) => {
    setDevGitHubHandle(target.value);
  };
  const handleGitHubHandleSearch = () => {
    return fetchDevsByGitHubHandle(devGitHubHandle)
      .then(list => {
        if(list) {
          console.log('this is the current list from fetching handle', list);
          setSuggestedHandlesList(list);
          setSuggestedNamesList(list);
        }});
  };
  useEffect(() => {
    handleGitHubHandleSearch();
  }, [devGitHubHandle]);





  // useEffect(() => {
  //   //hit get dev by devName route
  //   //update library
  // }, [devGitHubHandle]);

  const handleAddDevSubmit = () => {
    event.preventDefault();
    // dispatch(setPreviewGroupName(groupName));
  };

  return { handleNameInputChange, handleAddDevSubmit, devName, devGitHubHandle, suggestedNamesList, handleGitHubHandleInputChange, suggestedHandlesList };
};





// useEffect(() => {
//   //hit get dev by devName route, reutur
//   const handleNameSearch = () => {
//     return getDevsByName(devName)
//     //update list of devNames for the presentational component
//       .then(list => {
//         if(list) {
//           setSuggestedNamesList(list);
//         }});
//   };
//   handleNameSearch();
// }, [devName]);


// const getDevsByName = devName => {
//   return fetchDevsByName(devName)
//     .then(devNameFromFetch => {
//       dispatch(setDevName(devNameFromFetch));
//     })
//     .catch(err => {
//       console.log(err, 'this is the err from getDevsByName');
//     });
// };
