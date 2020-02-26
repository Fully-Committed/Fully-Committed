import React, { useState } from 'react';
import { usePreview } from '../../../hooks/usePreview';
import { toGetSuggestedDevs } from '../../../selectors/useSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { setSuggestedDevsByName, setSuggestedDevsByHandle } from '../../../actions/previewActions';


export const AddDevForm = () => {
  const [devName, setDevName] = useState('');
  const [handle, setHandle] = useState('');
  const dispatch = useDispatch();

  const { handleAddDevToPreview } = usePreview();

  const devs = useSelector(toGetSuggestedDevs);

  const nameElements = devs.map((dev, i) => (
    <li onClick={() => {
      handleAddDevToPreview(dev);
      setDevName(''); 
    }} key={i}>
      {dev.devName}
    </li>
  ));
 
  const handleElements = devs.map((dev, i) => (
    <li onClick={() => {
      handleAddDevToPreview(dev);
      setHandle('');
    }} key={i}>
      {dev.devGitHubHandle}
    </li>
  ));

  const handleNameChange = ({ target }) => {
    dispatch(setSuggestedDevsByName(target.value));
    setDevName(target.value);
  };

  const handleHandleChange = ({ target }) => {
    dispatch(setSuggestedDevsByHandle(target.value));
    setHandle(target.value);
  };
  return (
    <form>

      <h1>Add Dev</h1>
      <h2>Dev Name: </h2>
      <input type="search" value={devName} onChange={handleNameChange} />
      <ul>
        {nameElements}
      </ul>
      

      <h2>Github Handle</h2>
      <input type="search" value={handle} onChange={handleHandleChange} />
      <ul>
        {handleElements}
      </ul>
      

      <button>Add Dev</button>
    </form>
  );
};

