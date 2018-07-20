import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  BalanceTable,
  BalanceTableHeader,
  BalanceTableTh,
  BalanceTableTr,
  BalanceTableTd,
  SpinnerWrapper
} from './Style';
import { getIsRecordLoading, getRecords } from '../../ducks/transactions';
import { getCurrency } from '../../ducks/currency';
import Spinner from 'react-svg-spinner';

const mapStateToProps = state => ({
  records: getRecords(state),
  isLoading: getIsRecordLoading(state),
  currency: getCurrency(state)
});

class Balance extends Component {
  renderSpinner = () => {
    return (
      <SpinnerWrapper>
        <Spinner size="64px" color="fuchsia" gap={5} />
      </SpinnerWrapper>
    );
  };

  renderBalance = () => {
    const { currency, records } = this.props;
    return (
      <article>
        <BalanceTable>
          <thead>
            <BalanceTableHeader>
              <BalanceTableTh>Операция</BalanceTableTh>
              <BalanceTableTh>Дата</BalanceTableTh>
              <BalanceTableTh>
                {currency === 'btc' ? 'BTC' : 'ETH'}
              </BalanceTableTh>
              <BalanceTableTh>USD</BalanceTableTh>
            </BalanceTableHeader>
          </thead>
          <tbody>
            {records.map(item => (
              <BalanceTableTr key={item.id}>
                <BalanceTableTd>
                  {item.usd_delta < 0 ? 'Покупка' : 'Продажа'}
                </BalanceTableTd>
                <BalanceTableTd>item.createdAt</BalanceTableTd>
                <BalanceTableTd>{item[`${currency}_delta`]}</BalanceTableTd>
                <BalanceTableTd>{item.usd_delta}</BalanceTableTd>
              </BalanceTableTr>
            ))}
          </tbody>
        </BalanceTable>
      </article>
    );
  };

  render() {
    const { isLoading } = this.props;
    return <div>{isLoading ? this.renderSpinner() : this.renderBalance()}</div>;
  }
}

export default connect(mapStateToProps)(Balance);
