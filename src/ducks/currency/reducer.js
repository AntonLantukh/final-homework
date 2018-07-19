import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchBtcRequest,
  fetchEthRequest,
  fetchBtcSuccess,
  fetchEthSuccess,
  fetchBtcFailure,
  fetchEthFailure,
  selectBtc,
  selectEth,
  selectOffset
} from './action';

const selected = handleActions(
  {
    [selectBtc]: (_state, action) => 'btc',
    [selectEth]: (_state, action) => 'etc'
  },
  'btc'
);

const offset = handleActions(
  {
    [selectOffset]: (_state, action) => action.payload
  },
  '2h'
);

const btc = handleActions(
  {
    [fetchBtcSuccess]: (_state, action) => action.payload
  },
  []
);

const eth = handleActions(
  {
    [fetchEthSuccess]: (_state, action) => action.payload
  },
  []
);

const isBtcLoading = handleActions(
  {
    [fetchBtcRequest]: (_state, action) => true,
    [fetchBtcSuccess]: (_state, action) => false,
    [fetchBtcFailure]: (_state, action) => false
  },
  false
);

const isEthLoading = handleActions(
  {
    [fetchEthRequest]: (_state, action) => true,
    [fetchEthSuccess]: (_state, action) => false,
    [fetchEthFailure]: (_state, action) => false
  },
  false
);

export default combineReducers({
  selected,
  offset,
  btc,
  eth,
  isBtcLoading,
  isEthLoading
});
