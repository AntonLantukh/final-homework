export const getIsLoading = state => state.wallet.isLoading;
export const getCoins = state => state.wallet.coins;
export const getWalletError = state => state.wallet.error;
export const getIsWalletErrorPresent = state => {
  return state.wallet.error ? true : false;
};
