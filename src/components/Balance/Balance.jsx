import React, { PureComponent, Fragment } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { connect } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';

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

class Balance extends PureComponent {
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
          {records.map(
            item =>
              item[currency] ? (
                <BalanceTableTr key={item.id}>
                  <BalanceTableTd>
                    {item.usd < 0 ? 'Покупка' : 'Продажа'}
                  </BalanceTableTd>
                  <BalanceTableTd>{item.date}</BalanceTableTd>
                  <BalanceTableTd>{item[currency]}</BalanceTableTd>
                  <BalanceTableTd>{item.usd}</BalanceTableTd>
                </BalanceTableTr>
              ) : (
                <Fragment key={item.id} />
              )
          )}
        </tbody>
      </BalanceTable>
    );
  };

  render() {
    const { isLoading } = this.props;
    return (
      <article>
        {isLoading ? this.renderSpinner() : this.renderBalance()}{' '}
      </article>
    );
  }
}

export default connect(mapStateToProps)(Balance);
