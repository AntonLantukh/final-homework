import { takeLatest, put, call } from 'redux-saga/effects';
import { getWallet } from '../api';
import {
  fetchWalletRequest,
  fetchWalletSuccess,
  fetchWalletFailure
} from '../ducks/wallet';

function* fetchWalletFlow() {
  try {
    const response = yield call(getWallet);
    const result = response.data.result;
    yield put(fetchWalletSuccess(result));
  } catch (error) {
    yield put(fetchWalletFailure(error));
  }
}

export function* fetchWalletWatch() {
  yield takeLatest(fetchWalletRequest, fetchWalletFlow);
}
