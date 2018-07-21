import { takeLatest, put, call } from 'redux-saga/effects';
import { getUserTransactions } from '../api';
import {
  fetchUserTransactionsRequest,
  fetchUserTransactionsSuccess,
  fetchUserTransactionsFailure
} from '../ducks/transactions';

function* fetchTransactionsFlow() {
  try {
    const response = yield call(getUserTransactions);
    const result = response.data.result;
    yield put(fetchUserTransactionsSuccess(result));
  } catch (error) {
    yield put(fetchUserTransactionsFailure(error));
  }
}

export function* fetchTransactionsWatch() {
  yield takeLatest(fetchUserTransactionsRequest, fetchTransactionsFlow);
}
