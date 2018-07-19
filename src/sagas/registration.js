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
      const action = yield take(registrationRequest);
      const response = yield call(registration, action.payload);
      const token = response.data.jwt;
      yield call(setTokenApi, token);
      yield call(setTokenToLocalStorage, token);
      yield put(registrationSuccess());
      yield put(loginSuccess());
    } catch (error) {
      const message = error.data.message;
      yield put(registrationFailure(message));
    }
  }
}
