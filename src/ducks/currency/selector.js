export const getOffset = state => state.currency.offset;
export const getData = state => {
  if (state.cyrrency.selected === 'btc') {
    return state.currency.btc;
  } else {
    return state.currency.eth;
  }
};
export const getIsDataLoading = state => {
  if (state.cyrrency.selected === 'btc') {
    return state.currency.isBtcLoading;
  } else {
    return state.currency.isEthLoading;
  }
};
