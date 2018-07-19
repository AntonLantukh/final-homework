import React, { Component } from 'react';
import {BalanceTable, BalanceTableHeader, BalanceTableTh, BalanceTableTr, BalanceTableTd} from './Style'

export default class Balance extends Component {
  render() { 
    const {currency, records} = this.props;
    return (  
        <article>
            <BalanceTable>
                <thead>
                  <BalanceTableHeader>
                      <BalanceTableTh>Операция</BalanceTableTh>
                      <BalanceTableTh>Дата</BalanceTableTh>
                      <BalanceTableTh>{currency ? 'BTC' : 'ETH'}</BalanceTableTh>
                      <BalanceTableTh>USD</BalanceTableTh>
                  </BalanceTableHeader>
                </thead>
                <tbody>
                    {records.map((item) => 
                      <BalanceTableTr>
                          <BalanceTableTd>Операция</BalanceTableTd>
                          <BalanceTableTd>Дата</BalanceTableTd>
                          <BalanceTableTd>BTC</BalanceTableTd>
                          <BalanceTableTd>USD</BalanceTableTd>
                      </BalanceTableTr>
                    )}
                </tbody>
            </BalanceTable>
        </article>
    );
  }
}
