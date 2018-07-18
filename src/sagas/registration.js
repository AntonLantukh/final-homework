import { take, put, call } from 'redux-saga/effects';
import {
  loginSuccess,
  registrationRequest,
  registrationSuccess,
  registrationFailure
} from 'ducks/auth';
import { setTokenToLocalStorage } from 'localStorage';
import { registration, setTokenApi } from '../api';

export default function* registrationFlow() {
  while (true) {
    try {
      const { user, password } = yield take(registrationRequest);
      const token = yield call(registration, user, password);
      yield call(setTokenApi, token);
      yield call(setTokenToLocalStorage, token);
      yield put(registrationSuccess());
      yield put(loginSuccess());
    } catch (error) {
      const { message } = error.data;
      yield put(registrationFailure(message));
    }
  }
}
