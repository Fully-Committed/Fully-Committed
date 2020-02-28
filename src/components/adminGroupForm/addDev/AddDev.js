import React, { useState } from 'react';
import { usePreview } from '../../../hooks/usePreview';
import { toGetSuggestedDevs } from '../../../selectors/useSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { setSuggestedDevsByName, setSuggestedDevsByHandle } from '../../../actions/previewActions';
import styles from './AddDev.css';


export const AddDevForm = () => {
  const [devName, setDevName] = useState('');
  const [handle, setHandle] = useState('');
  const dispatch = useDispatch();

  const { handleAddDevToPreview, handleAddDevHandleCheckAgainstGitHub } = usePreview();

  const devs = useSelector(toGetSuggestedDevs);

  const nameElements = devs.map((dev, i) => (
    <li className={styles.previewDevName} onClick={() => {
      handleAddDevToPreview(dev);
      setDevName(''); 
      setHandle('');

    }} key={i}>
      {dev.devName}
    </li>
  ));

  const handleElements = devs.map((dev, i) => (
    <li className={styles.previewDevName} onClick={() => {
      handleAddDevToPreview(dev);
      setHandle('');
      setDevName(''); 

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

  const buttonRender = () => {
    if(nameElements.length === 0 && handleElements.length === 0 && devName && handle) {
      return (
        <button onClick={() => {
          handleAddDevHandleCheckAgainstGitHub(handle, devName);
          setDevName(''); 
          setHandle('');
        }
        } className={styles.active}>Add New Dev</button>
      );
    }
    else {
      return (
        <button className={styles.inactive}>Add New Dev</button>
      );
    }
  };

  return (
    <form onSubmit={() => event.preventDefault()}>
      <h1>Add Dev</h1>
      <section className={styles.adddev}>
        <section className={styles.enterName}>
          <h2>Dev Name: </h2>
          <input type="search" value={devName} onChange={handleNameChange} />
          <ul className={styles.chooseDev}>
            {nameElements}
          </ul>
        </section>
        <section className={styles.enterName}>
          <h2>Github Handle</h2>
          <input type="search" value={handle} onChange={handleHandleChange} />
          <ul className={styles.chooseDev}>
            {handleElements}
          </ul>
        </section>
      </section>
      <p>If a user does not exist in our library, enter a chosen username and their github handle and click the button to add them.</p>
      {buttonRender()}
    </form>
  );
};

