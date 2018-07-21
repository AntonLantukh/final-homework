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
    let response;
    if (!isAuthorized && localStorageToken) {
      response = localStorageToken;
      yield call(setTokenApi, response);
      yield put(loginSuccess());
    } else {
      try {
        const action = yield take(loginRequest);
        response = yield call(login, action.payload);
        const token = response.data.jwt;
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
