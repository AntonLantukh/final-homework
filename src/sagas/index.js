import { fork } from 'redux-saga/effects';
import loginFlow from './auth';
import registrationFlow from './registration';
import { currencyWatch } from './currency';
import { fetchWalletWatch } from './wallet';

export default function*() {
  yield fork(loginFlow);
  yield fork(registrationFlow);
  yield fork(currencyWatch);
  yield fork(fetchWalletWatch);
}
