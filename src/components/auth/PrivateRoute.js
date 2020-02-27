import React from 'react';
import PropTypes from 'prop-types';
import { toGetUserSession, toGetUserError } from '../../selectors/useSelectors';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { useVerifyUser } from '../../hooks/useVerifyUser';

export const PrivateRoute = ({ component, path }) => {
  const user = useSelector(toGetUserSession);
  const authError = useSelector(toGetUserError);

  useVerifyUser();
  if (!user && authError) {
    window.location.href = '/auth';
  }
  if (!user && !authError) {
    return null;
  }

  return <Route path={path} component={component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string.isRequired
};
