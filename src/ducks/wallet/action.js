import { createActions } from 'redux-actions';

export const {
  fetchWalletReguest,
  fetchWalletSuccess,
  fetchWalletFailure,
  buyCurrencyReguest,
  buyCurrencySucess,
  buyCurrencyFailure,
  sellCurrencyReguest,
  sellCurrencySucess,
  sellCurrencyFailure
} = createActions(
  'FETCH_WALLET_REQUEST',
  'FETCH_WALLET_SUCESS',
  'FETCH_WALLET_FAILURE',
  'BUY_CURRENCY_REQUEST',
  'BUY_CURRENCY_SUCCESS',
  'BUY_CURRENCY_FAILURE',
  'SELL_CURRENCY_REQUEST',
  'SELL_CURRENCY_SUCCESS',
  'SELL_CURRENCY_FAILURE'
);
