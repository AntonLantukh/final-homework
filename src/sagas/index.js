import { fork } from 'redux-saga/effects';
import loginFlow from './auth';

export default function*() {
  yield fork(loginFlow);
}
