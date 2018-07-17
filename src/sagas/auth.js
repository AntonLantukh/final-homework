import { take, put, call, fork, select } from 'redux-saga/effects';
import {
  auth,
  loginRequest,
  loginSuccess,
  loginFailure,
  getIsAuthorized,
  getIsLoginError
} from 'ducks/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from 'localStorage';
import { login, setTokenApi, clearTokenApi } from './api';

export default function* loginFlow() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;

    try {
      if (!isAuthorized && localStorageToken) {
        token = localStorageToken;
        yield call(setTokenApi(token));
        yield put(loginSuccess(token));
      } else {
        const { user, password } = yield take(loginRequest);
        yield call(login, user, password);
      }
    } catch (error) {
      const { message } = error.data;
      yield put(loginFailure(message));
    }
  }
}
