import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import TruckList from './TruckList';
import TruckDetails from './TruckDetails'
import AddTruck from './AddTruck';

function Routes() {
  return (
    <Switch>
      <Route
        path="/"
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
    </Switch>
  );
}

export default Routes;