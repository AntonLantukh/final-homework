import React, { PureComponent } from 'react';
import { PlatformWrapper, PlatformOperations } from './Style';
import Account from '../Account';
import TradeOperations from '../TradeOperations';
import Chart from '../Chart';
import Balance from '../Balance';

export default class Platform extends PureComponent {
  render() {
    return (
      <PlatformWrapper>
        <PlatformOperations>
          <Account />
          <TradeOperations />
        </PlatformOperations>
        <section>
          <Chart />
          <Balance />
        </section>
      </PlatformWrapper>
    );
  }
}
