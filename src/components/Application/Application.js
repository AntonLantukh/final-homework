import React, { PureComponent, Fragment } from 'react';
import { ApplicationMain, ApplicationWrapper } from './Style';
import Header from '../Header';
import Footer from '../Footer';
import Platform from '../Platform';

export default class Application extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <ApplicationMain>
          <ApplicationWrapper>
            <Platform match={this.props.match} />
          </ApplicationWrapper>
        </ApplicationMain>
        <Footer />
      </Fragment>
    );
  }
}
