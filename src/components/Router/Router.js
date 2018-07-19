import React, { PureComponent } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from '../Login';
import Application from '../Application';
import PrivateRoute from '../PrivateRoute';
import styled from 'styled-components';

class Router extends PureComponent {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" render={() => <Redirect to="/platform" />} />
          <PrivateRoute path="/platform" component={Application} />
          <Redirect to="/login" />
        </Switch>
      </App>
    );
  }
}

const App = styled.main`
  height: 100vh;
  background-color: rgb(245, 245, 246);
`;

export default withRouter(Router);
