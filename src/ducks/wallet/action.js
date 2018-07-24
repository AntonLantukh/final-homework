import { createActions } from 'redux-actions';

export const {
  wallet: {
    fetchWalletRequest,
    fetchWalletSuccess,
    fetchWalletFailure,
    buyCurrencyRequest,
    buyCurrencySuccess,
    buyCurrencyFailure,
    sellCurrencyRequest,
    sellCurrencySuccess,
    sellCurrencyFailure
  }
} = createActions({
  WALLET: {
    FETCH_WALLET_REQUEST: null,
    FETCH_WALLET_SUCCESS: null,
    FETCH_WALLET_FAILURE: null,
    BUY_CURRENCY_REQUEST: null,
    BUY_CURRENCY_SUCCESS: null,
    BUY_CURRENCY_FAILURE: null,
    SELL_CURRENCY_REQUEST: null,
    SELL_CURRENCY_SUCCESS: null,
    SELL_CURRENCY_FAILURE: null
  }
});
