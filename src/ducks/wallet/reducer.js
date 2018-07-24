import { handleActions } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-actions';
import { combineReducers } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import {
  fetchWalletRequest,
  fetchWalletSuccess,
  fetchWalletFailure,
  buyCurrencyRequest,
  buyCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyRequest,
  sellCurrencySuccess,
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
    [buyCurrencySuccess]: (_state, action) => action.payload,
    [sellCurrencySuccess]: (_state, action) => action.payload,
    [fetchWalletSuccess]: (_state, action) => action.payload
  },
  { usd: 0, btc: 0, eth: 0 }
);

const error = handleActions(
  {
    [fetchWalletRequest]: (_state, action) => null,
    [sellCurrencyRequest]: (_state, action) => null,
    [buyCurrencyRequest]: (_state, action) => null,
    [buyCurrencyFailure]: (_state, action) => action.payload,
    [sellCurrencyFailure]: (_state, action) => action.payload,
    [fetchWalletFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isLoading,
  coins,
  error
});
