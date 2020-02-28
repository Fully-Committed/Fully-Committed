//container for both signup and login
import React from 'react';
import { Signup } from './Signup';
import { Login } from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styles from './Auth.css';
import { AuthLinks } from './AuthLinks';
import { useSelector } from 'react-redux';
import { toGetUserError } from '../../selectors/useSelectors';


export const AuthPage = () => {
  const authError = useSelector(toGetUserError);
  const errorMessage = authError ? (<p>{authError.message}</p>) : (<></>);

  return (
    <Router>
      <section className={styles.AuthPage}>
        <Route path='/auth' component={AuthLinks} />
      </section>
      <Switch>
        <Route exact path='/auth/signup' component={Signup} />
        <Route exact path='/auth/login' component={Login} />
      </Switch>
      {errorMessage}
    </Router>
  );

};

export default AuthPage;
