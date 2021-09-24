import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from "../utils/history";
import Home from './Home'
import Login from './Login'
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute'
import TruckList from './TruckList';
import TruckDetails from './TruckDetails'
import AddTruck from './AddTruck';
import EditTruck from './EditTruck';

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
      <Route
        path="/trucks"
        exact
        component={TruckList}
      />
      <Route
        path="/trucks/detail/:id"
        exact
        component={TruckDetails}
      />
      <Route
        path="/trucks/new"
        exact
        component={AddTruck}
      />
      <Route
        path="/trucks/update/:id"
        exact
        component={EditTruck}
      />
    </Switch>
    </Router>
  );
}

export default Routes;