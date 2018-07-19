import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchWalletReguest,
  fetchWalletSuccess,
  fetchWalletFailure,
  buyCurrencyReguest,
  buyCurrencySucess,
  buyCurrencyFailure,
  sellCurrencyReguest,
  sellCurrencySucess,
  sellCurrencyFailure
} from './action';

const isLoading = handleActions(
  {
    [fetchWalletReguest]: (_state, action) => true,
    [fetchWalletSuccess]: (_state, action) => false,
    [fetchWalletFailure]: (_state, action) => false
  },
  false
);

const coins = handleActions(
  {
    [buyCurrencySucess]: (_state, action) => action.payload,
    [sellCurrencySucess]: (_state, action) => action.payload
  },
  {}
);

const error = handleActions(
  {
    [sellCurrencyReguest]: (_state, action) => null,
    [buyCurrencyReguest]: (_state, action) => null,
    [buyCurrencyFailure]: (_state, action) => action.payload,
    [sellCurrencyFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isLoading,
  coins,
  error
});
