import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from "../utils/history";
import Home from './Home'

import DriverList from './Driver/Index'
import DriverDetail from './Driver/Detail'

import Login from './Login'
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute'
import TruckList from './TruckList';
import TruckDetails from './TruckDetails';

import ShipmentTransporterList from './Shipment/Index'

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
        path="/drivers"
        exact
        component={DriverList}
      />
      <Route
        path="/drivers/detail/:id"
        exact
        component={DriverDetail}
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
        path="/shipments"
        exact
        component={ShipmentTransporterList}
      />
    </Switch>
    </Router>
  );
}

export default Routes;