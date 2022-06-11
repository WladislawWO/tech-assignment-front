import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

function PrivateRoute({ children, ...rest }) {
  const { isAuthorized } = useAuth();

  return (
    <Route {...rest}>
      {isAuthorized ? (
        children
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}

export default PrivateRoute;
