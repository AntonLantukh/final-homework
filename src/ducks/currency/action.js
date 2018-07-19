import { createActions } from 'redux-actions';

export const {
  fetchBtcRequest,
  fetchEthRequest,
  fetchBtcSuccess,
  fetchEthSuccess,
  fetchBtcFailure,
  fetchEthFailure,
  selectBtc,
  selectEth,
  selectOffset
} = createActions(
  'FETCH_BTC_REQUEST',
  'FETCH_ETH_REQUEST',
  'FETCH_BTC_SUCCESS',
  'FETCH_ETH_SUCESS',
  'FETCH_BTC_FAILURE',
  'FETCH_ETH_FAILURE',
  'SELECT_BTC',
  'SELECT_ETH',
  'SELECT_OFFSET'
);
