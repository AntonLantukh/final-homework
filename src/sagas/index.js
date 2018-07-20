import { fork } from 'redux-saga/effects';
import loginFlow from './auth';
import registrationFlow from './registration';
import currencyFlow from './currency'

export default function*() {
  yield fork(loginFlow);
  yield fork(registrationFlow);
  yield fork(currencyFlow);
}
