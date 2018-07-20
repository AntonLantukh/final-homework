import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/Logo-white.svg';
import {
  HeaderMain,
  HeaderWrapper,
  HeaderCurrency,
  HeaderCurrencyWrapper,
  HeaderLogo
} from './Style';
import { connect } from 'react-redux';
import {
  getCurrencyBtcLast,
  getCurrencyEthLast,
  getCurrency,
  selectBtc,
  selectEth
} from '../../ducks/currency';
import { getUser } from '../../ducks/user';

const mapStateToProps = state => ({
  currencyBtcLast: getCurrencyBtcLast(state),
  currencyEthLast: getCurrencyEthLast(state),
  selectedCurrency: getCurrency(state),
  user: getUser(state)
});

const mapDispatchToProps = { selectBtc, selectEth };

const currencies = {
  btc: 'BTC',
  eth: 'ETH'
};

class Header extends Component {
  onLinkHandler = element => {
    const { selectBtc, selectEth } = this.props;
    element === 'btc' ? selectBtc() : selectEth();
  };

  render() {
    const {
      currencyBtcLast,
      currencyEthLast,
      selectedCurrency,
      user
    } = this.props;
    const values = {
      btc: currencyBtcLast ? currencyBtcLast.toFixed(1) : 0,
      eth: currencyEthLast ? currencyEthLast.toFixed(1) : 0
    };

    return (
      <HeaderMain>
        <HeaderWrapper>
          <HeaderLogo src={logo} alt="logo" />
          <HeaderCurrency>
            {Object.keys(currencies).map(
              element =>
                selectedCurrency === element ? (
                  <Link
                    to={`/trade/${element}`}
                    key={element}
                    onClick={this.onLinkHandler(element)}
                  >
                    <HeaderCurrencyWrapper>
                      {values.element}
                      <b>1 currencies.element</b>
                    </HeaderCurrencyWrapper>
                  </Link>
                ) : (
                  <HeaderCurrencyWrapper key={element}>
                    {values.element}
                    <b>1 currencies.element</b>
                  </HeaderCurrencyWrapper>
                )
            )}
          </HeaderCurrency>
          <span>{user}</span>
        </HeaderWrapper>
      </HeaderMain>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
