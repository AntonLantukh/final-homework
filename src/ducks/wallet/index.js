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

import wallet from './reducer';
import {
  getIsLoading,
  getCoins,
  getWalletError,
  getIsWalletErrorPresent
} from './selector';

export {
  fetchWalletReguest,
  fetchWalletSuccess,
  fetchWalletFailure,
  buyCurrencyReguest,
  buyCurrencySucess,
  buyCurrencyFailure,
  sellCurrencyReguest,
  sellCurrencySucess,
  sellCurrencyFailure,
  wallet,
  getIsLoading,
  getCoins,
  getWalletError,
  getIsWalletErrorPresent
};
