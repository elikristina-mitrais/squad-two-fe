import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from "../utils/history";
import Home from './Home'

import DriverList from './Driver/Index'
import DriverDetail from './Driver/Detail'
import AddDriver from './Drivers/AddDriver';

import Login from './Login'
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute'
import TruckList from './TruckList';
import TruckDetails from './TruckDetails';
import EditDriver from './Driver/EditDriver';
import TruckDetails from './TruckDetails'
import AddTruck from './AddTruck';
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

      <PrivateRoute 
        path="/drivers/new"
        exact
        component={AddDriver}
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
        path="/drivers/update/:id"
        exact
        component={EditDriver}
      />

      <Route
        path="/trucks/new"
        exact
        component={AddTruck}
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