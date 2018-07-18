import { take, put, call, select } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  getIsAuthorized
} from 'ducks/auth';
import { getTokenFromLocalStorage, setTokenToLocalStorage } from 'localStorage';
import { login, setTokenApi } from '../api';

export default function* loginFlow() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;
    if (!isAuthorized && localStorageToken) {
      token = localStorageToken;
      yield put(loginSuccess());
    } else {
      try {
        const action = yield take(loginRequest);
        const { user, password } = action.payload;
        token = yield call(login, user, password);
        yield call(setTokenApi, token);
        yield call(setTokenToLocalStorage, token);
        yield put(loginSuccess());
      } catch (error) {
        const { message } = error.data;
        yield put(loginFailure(message));
      }
    }
  }
}
