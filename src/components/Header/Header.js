import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/Logo-white.svg';
import {
  HeaderMain,
  HeaderWrapper,
  HeaderCurrency,
  HeaderCurrencyWrapper,
  HeaderCurrencyWrapperActive,
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

class Header extends PureComponent {
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
              item =>
                selectedCurrency === item ? (
                  <Link to={`/platform/${item}`} key={item}>
                    <HeaderCurrencyWrapperActive>
                      {values[item]}
                      <b>1 {currencies[item]}</b>
                    </HeaderCurrencyWrapperActive>
                  </Link>
                ) : (
                  <Link to={`/platform/${item}`} key={item}>
                    <HeaderCurrencyWrapper key={item}>
                      {values[item]}
                      <b>1 {currencies[item]}</b>
                    </HeaderCurrencyWrapper>
                  </Link>
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
