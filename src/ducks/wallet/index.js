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
  buyCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyRequest,
  sellCurrencySuccess,
  sellCurrencyFailure,
  wallet,
  getIsLoading,
  getCoins,
  getWalletError,
  getIsWalletErrorPresent
};
