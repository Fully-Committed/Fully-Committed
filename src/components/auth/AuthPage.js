//container for both signup and login
import React from 'react';
import { Signup } from './Signup';
import { Login } from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AuthButtons } from './AuthButtons';

export const AuthPage = () => {

  return (
    <Router>
      <Route exact path='/auth' component={AuthButtons} />
      <Switch>
        <Route exact path='/auth/signup' component={Signup} />
        <Route exact path='/auth/login' component={Login} />
      </Switch>
    </Router>
  );

};

export default AuthPage;
