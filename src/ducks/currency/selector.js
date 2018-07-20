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

export const getCurrency = state => {
  return state.cyrrency.selected;
};

export const getCurrentCurrencyPurchase = state => {
  let currency;
  if (state.currency.selected === 'btc') {
    currency = state.currency.btc;
  } else {
    currency = state.currency.eth;
  }
  const currencyLength = currency.length;
  return currency[currencyLength - 1].purchase;
};

export const getCurrentCurrencySell = state => {
  let currency;
  if (state.currency.selected === 'btc') {
    currency = state.currency.btc;
  } else {
    currency = state.currency.eth;
  }
  const currencyLength = currency.length;
  return currency[currencyLength - 1].sell;
};

export const getCurrencyBtcLast = state => {
  let currency = state.currency.btc;
  const currencyLength = currency.length;
  return currency[currencyLength - 1].sell;
};

export const getCurrencyEthLast = state => {
  let currency = state.currency.eth;
  const currencyLength = currency.length;
  return currency[currencyLength - 1].sell;
};
