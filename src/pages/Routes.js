import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from "../utils/history";
import Login from './Login'
import Home from './Home'
import TransporterListing from './Shipment/Transporter/Listing'
import ShipperListing from './Shipment/Shipper/Listing'
import TruckListing from './Truck/Listing'
import TruckDetail from './Truck/Detail'
import TruckNew from './Truck/New'
import TruckUpdate from './Truck/Update'
import DriverListing from './Driver/Listing'
import DriverDetail from './Driver/Detail'
import DriverNew from './Driver/New'
import DriverUpdate from './Driver/Update'

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact path="/"
          component={Login}
        />
        <Route
          exact path="/home"
          component={Home}
        />
        <Route
          exact path="/transporters"
          component={TransporterListing}
        />
        <Route
          exact path="/trucks"
          component={TruckListing}
        />
        <Route
          exact path="/trucks/new"
          component={TruckNew}
        />
        <Route
          exact path="/trucks/update/:id"
          component={TruckUpdate}
        />
        <Route
          exact path="/trucks/detail/:id"
          component={TruckDetail}
        />
        <Route
          exact path="/drivers"
          component={DriverListing}
        />
        <Route
          exact path="/drivers/new"
          component={DriverNew}
        />
        <Route
          exact path="/drivers/update/:id"
          component={DriverUpdate}
        />
        <Route
          exact path="/drivers/detail/:id"
          component={DriverDetail}
        />
        <Route
          exact path="/shippers"
          component={ShipperListing}
        />
      </Switch>
    </Router>
  );
}

export default Routes;