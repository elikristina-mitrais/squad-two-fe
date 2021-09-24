import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home'
import DriverList from './Driver/Index'

function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route
        path="/drivers"
        exact
        component={DriverList}
      />
    </Switch>
  );
}

export default Routes;