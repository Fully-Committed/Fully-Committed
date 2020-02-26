import React from 'react';
<<<<<<< HEAD
import { useVerifyUser } from '../hooks/useVerifyUser';
import AdminGroupForm from './adminGroupForm/AdminGroupForm';

=======
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { AdminDataView } from './adminDataView/AdminDataView';
import { AuthPage } from './auth/AuthPage';
import { useVerifyUser } from '../hooks/useVerifyUser';
>>>>>>> a6279ae782415155f58561133d72beb4c11133a7

export default function App() {
  useVerifyUser();
  return (
<<<<<<< HEAD
    <>
      <AdminGroupForm />
    </>
=======
    <Router>
      <Switch>
        <Route exact path='/signuplogin' component={AuthPage} />
        <Route exact path='/adv' component={AdminDataView} />
      </Switch>
    </Router>
>>>>>>> a6279ae782415155f58561133d72beb4c11133a7
  );
}
