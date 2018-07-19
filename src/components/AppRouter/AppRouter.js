import React, { PureComponent } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from '../Login';
import Profile from '../Profile';
import PrivateRoute from '../PrivateRoute';
import styled from 'styled-components';

class AppRouter extends PureComponent {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
          <PrivateRoute path="/profile" component={Profile} />
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

export default withRouter(AppRouter);
