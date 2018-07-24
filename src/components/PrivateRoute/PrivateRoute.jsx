import React, { PureComponent } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Route, Redirect } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import { getIsAuthorized } from '../../ducks/auth';
import { connect } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';

class PrivateRoute extends PureComponent {
  render() {
    const { component: PureComponent, isAuthorized, ...rest } = this.props;

    return (
      <Route
        isAuthorized={isAuthorized}
        {...rest}
        render={props =>
          isAuthorized ? <PureComponent {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(PrivateRoute);
