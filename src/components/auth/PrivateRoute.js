import React from 'react';
import PropTypes from 'prop-types';
import { toGetLoading, toGetUserSession } from '../../selectors/useSelectors';
import { useSelector } from 'react-redux';
import { useLocation, useHistory, Route } from 'react-router-dom';

export const PrivateRoute = ({ component, path}) => {
  const loading = useSelector(toGetLoading);
  const user = useSelector(toGetUserSession);
  // const location = useLocation();
  const history = useHistory();

  if(loading) return null;
  if(!user) {
    history.replace('/auth')
  }

  return <Route path={path} component={component} />
};




PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string.isRequired
};
