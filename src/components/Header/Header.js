import React, { Component } from 'react';
import logo from './img/Logo-white.svg';
import {
  HeaderMain,
  HeaderWrapper,
  HeaderCurrency,
  HeaderCurrencyWrapper,
  HeaderLogo
} from './Style';

export default class Header extends Component {
  render() {
    return (
      <HeaderMain>
        <HeaderWrapper>
          <HeaderLogo src={logo} alt="logo" />
          <HeaderCurrency>
            <HeaderCurrencyWrapper>
              7300
              <b>1 BTC</b>
            </HeaderCurrencyWrapper>
            <HeaderCurrencyWrapper>
              470
              <b>1 ETH</b>
            </HeaderCurrencyWrapper>
          </HeaderCurrency>
          <span>test</span>
        </HeaderWrapper>
      </HeaderMain>
    );
  }
}
