import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  AccountContainer,
  AccountWrapper,
  AccountInput,
  AccountInteger,
  AccountFloat,
  AccountCurrency,
  SpinnerWrapper
} from './Style';

import { getCoins, getIsLoading } from '../../ducks/wallet';
import Spinner from 'react-svg-spinner';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  coins: getCoins(state)
});

const currencies = {
  usd: '$',
  btc: 'BTC',
  eth: 'ETH'
};

class Account extends Component {
  renderSpinner = () => {
    return (
      <SpinnerWrapper>
        <Spinner size="64px" color="fuchsia" gap={5} />
      </SpinnerWrapper>
    );
  };

  renderWallet = () => {
    const { coins } = this.props;
    const values = {
      usd: coins.usd ? String(coins.usd).split('.') : 0,
      btc: coins.btc ? String(coins.btc).split('.') : 0,
      eth: coins.eth ? String(coins.eth).split('.') : 0
    };

    return (
      <Fragment>
        <h2>Ваш счёт</h2>
        {Object.keys(currencies).map(element => (
          <AccountContainer key={element}>
            <AccountInput>
              <AccountInteger>
                {values[element][0] ? values[element][0] : 0}
              </AccountInteger>
              .
              <AccountFloat>
                {values[element][1] ? values[element][1] : 0}
              </AccountFloat>
            </AccountInput>
            <AccountCurrency>{currencies[element]}</AccountCurrency>
          </AccountContainer>
        ))}
      </Fragment>
    );
  };

  render() {
    const { isLoading } = this.props;
    return (
      <AccountWrapper>
        {isLoading ? this.renderSpinner() : this.renderWallet()}
      </AccountWrapper>
    );
  }
}

export default connect(mapStateToProps)(Account);
