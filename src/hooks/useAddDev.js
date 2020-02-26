import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDevsByName } from '../services/adminGroupFormServices';


export const useAddDev = () => {
  const [devName, setDevName] = useState('');
  const [devGitHubHandle, setDevGitHubHandle] = useState('')
  ;
  const [suggestedNamesList, setSuggestedNamesList] = useState([]);
  
  const dispatch = useDispatch();

  const getDevsByName = devName => {
    return fetchDevsByName(devName)
      .then(devNameFromFetch => {
        dispatch(setDevName(devNameFromFetch));
      })
      .catch(err => {
        console.log(err, 'this is the err from getDevsByName');
      });
  };


  const handleNameSearch = () => {
    getDevsByName(devName)
    //update list of devNames for the presentational component
      .then(list => {
        // if(list) {
        //   setSuggestedNamesList(list);
        // }
        console.log('this is the current list', list);
      });
  };

  const handleNameInputChange = ({ target }) => {
    setDevName(target.value);
    handleNameSearch();
  };



  // useEffect(() => {
  //   //hit get dev by devName route
  //   //update library
  // }, [devGitHubHandle]);

  const handleAddDevSubmit = () => {
    event.preventDefault();
    // dispatch(setPreviewGroupName(groupName));
  };

  return { handleNameInputChange, handleAddDevSubmit, devName, devGitHubHandle, suggestedNamesList };
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
