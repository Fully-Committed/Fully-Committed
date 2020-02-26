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


export const AuthPage = () => {

  return (
    <Router>
      <section className={styles.AuthPage}>
        <Route path='/auth' component={AuthLinks} />
        <Switch>
          <Route exact path='/auth/signup' component={Signup} />
          <Route exact path='/auth/login' component={Login} />
        </Switch>
      </section>
    </Router>
  );

};

export default AuthPage;
