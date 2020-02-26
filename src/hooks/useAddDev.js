import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


export const useAddDev = () => {
  const [devName, setDevName] = useState('');
  const [devGitHubHandle, setDevGitHubHandle] = useState('')
  ;
  
  const dispatch = useDispatch();

  const inputFactoryMethod = {
    devName: setDevName,
    devGitHubHandle: setDevGitHubHandle
  };

  const handleChange = ({ target }) => {
    inputFactoryMethod[target.name](target.value);
  };

  const getDevsByName = devName => {
    fetchDevsByName(devName);
  };



  useEffect(() => {
    //hit get dev by devName route
    //update library
  }, [devName]);

  // useEffect(() => {
  //   //hit get dev by devName route
  //   //update library
  // }, [devGitHubHandle]);



  const handleAddDevSubmit = () => {
    event.preventDefault();
    // dispatch(setPreviewGroupName(groupName));
  };


  return { handleChange, handleAddDevSubmit, devName, devGitHubHandle };
};
