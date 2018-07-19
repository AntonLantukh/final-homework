import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchUserTransactionsReguest,
  fetchUserTransactionsSuccess,
  fetchUserTransactionsFailure
} from './action';

const isLoading = handleActions(
  {
    [fetchUserTransactionsReguest]: (_state, action) => true,
    [fetchUserTransactionsSuccess]: (_state, action) => false,
    [fetchUserTransactionsFailure]: (_state, action) => false
  },
  false
);

const records = handleActions(
  {
    [fetchUserTransactionsSuccess]: (_state, action) => action.payload
  },
  '2h'
);

export default combineReducers({
  isLoading,
  records
});
