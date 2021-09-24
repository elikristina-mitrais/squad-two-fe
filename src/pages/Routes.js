import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home'
import DriverList from './Driver/Index'
import DriverDetail from './Driver/Detail'

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
      <Route
        path="/drivers/detail/:id"
        exact
        component={DriverDetail}
      />
    </Switch>
  );
}

export default Routes;