import React, { PureComponent } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Route, Redirect, Switch, withRouter } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import Login from '../Login';
import Application from '../Application';
import PrivateRoute from '../PrivateRoute';

class Router extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" render={() => <Redirect to="/platform/btc" />} />
        <PrivateRoute path="/platform/:name" component={Application} />
        <Redirect to="/login" />
      </Switch>
    );
  }
}

export default withRouter(Router);
