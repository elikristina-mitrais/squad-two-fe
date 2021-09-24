import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from "../utils/history";
import Home from './Home';
import Login from './Login';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import AddDriver from './Drivers/AddDriver';

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
      <PrivateRoute 
        path="/drivers/new"
        exact
        component={AddDriver}
      />
      
    </Switch>
    </Router>
  );
}

export default Routes;