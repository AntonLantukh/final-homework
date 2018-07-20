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
  getCurrency
} from '../../ducks/currency';

const mapStateToProps = state => ({
  currencyBtcLast: getCurrencyBtcLast(state),
  currencyEthLast: getCurrencyEthLast(state),
  selectedCurrency: getCurrency(state),
 });

 const currencies = {
  btc: 'BTC',
  eth: 'ETH'
};
 
class Header extends Component {
  render() {
    const {currencyBtcLast, currencyEthLast, selectedCurrency} = this.props;
    const btc = currencyBtcLast ? currencyBtcLast.toFixed(1) : 0;
    const eth = currencyEthLast ? currencyEthLast.toFixed(1) : 0;
    return (
      <HeaderMain>
        <HeaderWrapper>
          <HeaderLogo src={logo} alt="logo" />
          <HeaderCurrency>
            {Obkect.keys(currencies).map(element) => {
              
            }}
            {selectedCurrency === 'btc' ? <Link to="/trade/btc" onClick={this.onClickNavLink('btc')}> : ''}
            <HeaderCurrencyWrapper>
              {currencyBtcLast}
              <b>1 BTC</b>
            </HeaderCurrencyWrapper>
            {selectedCurrency === 'btc' ? </Link> : ''}
            <HeaderCurrencyWrapper>
              {currencyEthLast}
              <b>1 ETH</b>
            </HeaderCurrencyWrapper>
          </HeaderCurrency>
          <span>test</span>
        </HeaderWrapper>
      </HeaderMain>
    );
  }
}

export default connect(
  mapStateToProps
)(Header);

