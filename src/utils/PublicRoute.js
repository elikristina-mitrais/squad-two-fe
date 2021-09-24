import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getRole } from './Common';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => !getRole() ? <Component {...props} /> : <Redirect to={{ pathname: '/home' }} />}
    />
  )
}

export default PublicRoute;