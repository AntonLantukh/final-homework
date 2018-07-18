import { fork } from 'redux-saga/effects';
import loginFlow from './auth';
import registrationFlow from './registration';

export default function*() {
  yield fork(loginFlow);
  yield fork(registrationFlow);
}
