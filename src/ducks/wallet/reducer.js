import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchWalletRequest,
  fetchWalletSuccess,
  fetchWalletFailure,
  buyCurrencyRequest,
  buyCurrencySucess,
  buyCurrencyFailure,
  sellCurrencyRequest,
  sellCurrencySucess,
  sellCurrencyFailure
} from './action';

const isLoading = handleActions(
  {
    [fetchWalletRequest]: (_state, action) => true,
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
    [sellCurrencyRequest]: (_state, action) => null,
    [buyCurrencyRequest]: (_state, action) => null,
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
