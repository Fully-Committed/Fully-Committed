import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { AdminDataView } from './adminDataView/AdminDataView';
import { AuthPage } from './auth/AuthPage';
import { PrivateRoute } from './auth/PrivateRoute';
import Header from '../components/header/Header';
import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/auth' component={AuthPage} />
        <PrivateRoute exact path='/' component={AdminDataView} />
      </Switch>
    </Router>
  );
}
