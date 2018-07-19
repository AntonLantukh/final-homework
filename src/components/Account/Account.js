import React, { Component, Fragment } from 'react';
import {
  AccountContainer,
  AccountInput,
  AccountInteger,
  AccountFloat,
  AccountCurrency
} from './Style';

class Account extends Component {
  render() {
    return (
      <Fragment>
        <h2>Ваш счёт</h2>
        <AccountContainer>
          <AccountInput>
            <AccountInteger>1000</AccountInteger>
            .
            <AccountFloat>12345</AccountFloat>
          </AccountInput>
          <AccountCurrency />
        </AccountContainer>
      </Fragment>
    );
  }
}

export default Account;
