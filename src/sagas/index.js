import { fork } from 'redux-saga/effects';
import loginFlow from './auth';
import registrationFlow from './registration';
import { currencyWatch, fetchBtcWatch, fetchEthWatch } from './currency';
import { fetchWalletWatch } from './wallet';
import { fetchTransactionsWatch } from './transactions';
import { fetchUserWatch } from './user';
import { fetchExchangeWatch } from './exchange';

export default function*() {
  yield fork(loginFlow);
  yield fork(registrationFlow);
  yield fork(currencyWatch);
  yield fork(fetchWalletWatch);
  yield fork(fetchUserWatch);
  yield fork(fetchTransactionsWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(fetchExchangeWatch);
}
