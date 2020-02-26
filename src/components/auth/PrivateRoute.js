import React from 'react';
import PropTypes from 'prop-types';
import { toGetUserSession, toGetUserError } from '../../selectors/useSelectors';
import { useSelector } from 'react-redux';
import { useHistory, Route } from 'react-router-dom';
import { useVerifyUser } from '../../hooks/useVerifyUser';

export const PrivateRoute = ({ component, path }) => {
  const user = useSelector(toGetUserSession);
  const error = useSelector(toGetUserError);
  const history = useHistory();

  useVerifyUser();
  if (!user && error) {
    history.replace('/auth');
  }
  if (!user && !error) return null;


  return <Route path={path} component={component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string.isRequired
};
