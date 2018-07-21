import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PlatformWrapper, PlatformOperations } from './Style';
import Account from '../Account';
import TradeOperations from '../TradeOperations';
import Chart from '../Chart';
import Balance from '../Balance';
import { selectBtc, selectEth, getOffset } from '../../ducks/currency';
import { fetchWalletRequest } from '../../ducks/wallet';
import { getUserInfoRequest } from '../../ducks/user';
import { fetchUserTransactionsRequest } from '../../ducks/transactions';

const mapStateToProps = state => ({
  offset: getOffset(state)
});

const mapDispatchToProps = {
  fetchWalletRequest,
  fetchUserTransactionsRequest,
  getUserInfoRequest,
  selectEth,
  selectBtc
};

class Platform extends PureComponent {
  componentDidMount() {
    this.props.fetchWalletRequest();
    this.props.fetchUserTransactionsRequest();
    this.props.getUserInfoRequest();
    const match = this.props.match;
    if (match && match.params.name === 'eth') {
      this.props.selectEth();
    } else {
      this.props.selectBtc();
    }
  }

  componentDidUpdate() {
    const match = this.props.match;
    if (match && match.params.name === 'eth') {
      this.props.selectEth();
    } else {
      this.props.selectBtc();
    }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Platform);
