import React, { PureComponent, Fragment } from 'react';
import { PlatformMain, PlatformWrapper, PlatformCenter } from './Style';
import Header from '../Header';
import Footer from '../Footer';

export default class Platform extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <PlatformMain>
          <PlatformWrapper>
            <PlatformCenter>
            </PlatformCenter>
          </PlatformWrapper>
        </PlatformMain>
        <Footer />
      </Fragment>
    );
  }
}
