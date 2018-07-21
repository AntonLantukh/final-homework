import { createActions } from 'redux-actions';

export const {
  currency: {
    fetchBtcRequest,
    fetchEthRequest,
    fetchBtcSuccess,
    fetchEthSuccess,
    fetchBtcFailure,
    fetchEthFailure,
    selectBtc,
    selectEth,
    selectOffset
  }
} = createActions({
  CURRENCY: {
    FETCH_BTC_REQUEST: null,
    FETCH_ETH_REQUEST: null,
    FETCH_BTC_SUCCESS: null,
    FETCH_ETH_SUCCESS: null,
    FETCH_BTC_FAILURE: null,
    FETCH_ETH_FAILURE: null,
    SELECT_BTC: null,
    SELECT_ETH: null,
    SELECT_OFFSET: null
  }
});
