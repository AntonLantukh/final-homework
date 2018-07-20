import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PlatformWrapper, PlatformOperations } from './Style';
import Account from '../Account';
import TradeOperations from '../TradeOperations';
import Chart from '../Chart';
import Balance from '../Balance';
import { selectBtc, selectEth } from '../../ducks/currency';

import { fetchWalletRequest } from '../../ducks/wallet';

import { fetchUserTransactionsRequest } from '../../ducks/transactions';

//const mapStateToProps = state => ({
// offset: getOffset(state),
// flow: getData(state),
// isLoading: getIsDataLoading(state)
//});

const mapDispatchToProps = {
  fetchWalletRequest,
  fetchUserTransactionsRequest,
  selectEth,
  selectBtc
};

class Platform extends PureComponent {
  componentDidMount() {
    const match = this.props.match;
    if (match && match.params.name === 'eth') {
      this.props.selectEth();
    } else {
      this.props.selectBtc();
    }
    this.props.fetchWalletRequest();
    this.props.fetchUserTransactionsRequest();
  }

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

export default connect(mapDispatchToProps)(Platform);
