import { takeLatest, put, call } from 'redux-saga/effects';
import { getUserInfo } from '../api';
import {
  getUserInfoRequest,
  getUserInfoSucess,
  getUserInfoFailure
} from '../ducks/user';

function* fetchUserFlow() {
  try {
    const response = yield call(getUserInfo);
    const result = response.data.result;
    yield put(getUserInfoSucess(result));
  } catch (error) {
    yield put(getUserInfoFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(getUserInfoRequest, fetchUserFlow);
}
