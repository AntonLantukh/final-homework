export const getOffset = state => state.currency.offset;
export const getData = state => {
  if (state.cyrrency.selected === 'btc') {
    return state.currency.btc;
  } else {
    return state.currency.eth;
  }
};
export const getIsDataLoading = state => {
  if (state.currency.selected === 'btc') {
    return state.currency.isBtcLoading;
  } else {
    return state.currency.isEthLoading;
  }
};

export const getCurrency = state => {
  return state.currency.selected;
};

export const getCurrentCurrencyPurchase = state => {
  let currency;
  if (state.currency.btc.length && state.currency.selected === 'btc') {
    currency = state.currency.btc;
  } else if (state.currency.eth.length && state.currency.selected === 'eth') {
    currency = state.currency.eth;
  } else {
    return null;
  }
  const currencyLength = currency.length;
  return currency[currencyLength - 1].purchase;
};

export const getCurrentCurrencySell = state => {
  let currency;
  if (state.currency.btc.length && state.currency.selected === 'btc') {
    currency = state.currency.btc;
  } else if (state.currency.eth.length && state.currency.selected === 'eth') {
    currency = state.currency.eth;
  } else {
    return null;
  }
  const currencyLength = currency.length;
  return currency[currencyLength - 1].sell;
};

export const getCurrencyBtcLast = state => {
  if (state.currency.btc.length) {
    let currency = state.currency.btc;
    const currencyLength = currency.length;
    return currency[currencyLength - 1].sell;
  } else {
    return null;
  }
};

export const getCurrencyEthLast = state => {
  if (state.currency.eth.length) {
    let currency = state.currency.eth;
    const currencyLength = currency.length;
    return currency[currencyLength - 1].sell;
  } else {
    return null;
  }
};
