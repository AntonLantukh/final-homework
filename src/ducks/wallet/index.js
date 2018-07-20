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

import wallet from './reducer';
import {
  getIsLoading,
  getCoins,
  getWalletError,
  getIsWalletErrorPresent
} from './selector';

export {
  fetchWalletRequest,
  fetchWalletSuccess,
  fetchWalletFailure,
  buyCurrencyRequest,
  buyCurrencySucess,
  buyCurrencyFailure,
  sellCurrencyRequest,
  sellCurrencySucess,
  sellCurrencyFailure,
  wallet,
  getIsLoading,
  getCoins,
  getWalletError,
  getIsWalletErrorPresent
};
