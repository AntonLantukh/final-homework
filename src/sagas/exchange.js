import { takeLatest, put, call } from 'redux-saga/effects';
import { buyCurrency, sellCurrency } from '../api';
import {
  buyCurrencyRequest,
  buyCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyRequest,
  sellCurrencySuccess,
  sellCurrencyFailure
} from '../ducks/wallet';

function* fetchBuyRequest(action) {
  try {
    const { selectedCurrency: currency, value } = action.payload;
    console.log(currency, value);
    const response = yield call(buyCurrency, currency, value);
    const result = response.data.result;
    yield put(buyCurrencySuccess(result));
  } catch (error) {
    yield put(buyCurrencyFailure(error));
  }
}

function* fetchSellRequest(action) {
  try {
    const { selectedCurrency: currency, value } = action.payload;
    const response = yield call(sellCurrency, currency, value);
    console.log(response);
    const result = response.data.result;
    yield put(sellCurrencySuccess(result));
  } catch (error) {
    yield put(sellCurrencyFailure(error));
  }
}

export function* fetchExchangeWatch() {
  yield takeLatest(buyCurrencyRequest, fetchBuyRequest);
  yield takeLatest(sellCurrencyRequest, fetchSellRequest);
}
