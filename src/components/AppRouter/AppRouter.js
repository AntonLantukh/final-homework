import React, { PureComponent } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from '../Login';
import Profile from '../Login';
import PrivateRoute from '../PrivateRoute';

export class AppRouter extends PureComponent {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(AppRouter);
