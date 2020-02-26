import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { AdminDataView } from './adminDataView/AdminDataView';
import { AuthPage } from './auth/AuthPage';
import { useVerifyUser } from '../hooks/useVerifyUser';
import { PrivateRoute } from './auth/PrivateRoute';

export default function App() {
  useVerifyUser();
  return (
    <Router>
      <Switch>
        <Route exact path='/auth' component={AuthPage} />
        <PrivateRoute path='/adv' component={AdminDataView} />
      </Switch>
    </Router>
  );
}
