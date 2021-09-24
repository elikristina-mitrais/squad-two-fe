import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from "../utils/history";
import Home from './Home'
import Login from './Login'
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute'

function Routes() {
  return (
    <Router history={history}>
    <Switch>
      <Route exact path='/' component={Login} />
      <PublicRoute path='/login' component={Login} />
      <PrivateRoute
        path="/home"
        exact
        component={Home}
      />
      
    </Switch>
    </Router>
  );
}

export default Routes;