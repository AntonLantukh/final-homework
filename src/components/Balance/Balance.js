import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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
            {records.map(
              item =>
                item[`${currency}_delta`] === item[`currency_delta`] ? (
                  <BalanceTableTr key={item.id}>
                    <BalanceTableTd>
                      {item.usd_delta < 0 ? 'Покупка' : 'Продажа'}
                    </BalanceTableTd>
                    <BalanceTableTd>
                      {moment(
                        item.created_at,
                        'YYYY-MM-DDTHH:mm:ss.SSSZ'
                      ).format('DD.MM.YYYY HH:mm')}
                    </BalanceTableTd>
                    <BalanceTableTd>{item[`${currency}_delta`]}</BalanceTableTd>
                    <BalanceTableTd>
                      {item['usd_delta'] && item['usd_delta'].toFixed(3)}
                    </BalanceTableTd>
                  </BalanceTableTr>
                ) : (
                  ''
                )
            )}
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
