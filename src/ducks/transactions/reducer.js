import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchUserTransactionsRequest,
  fetchUserTransactionsSuccess,
  fetchUserTransactionsFailure
} from './action';

const isLoading = handleActions(
  {
    [fetchUserTransactionsRequest]: (_state, action) => true,
    [fetchUserTransactionsSuccess]: (_state, action) => false,
    [fetchUserTransactionsFailure]: (_state, action) => false
  },
  false
);

const records = handleActions(
  {
    [fetchUserTransactionsSuccess]: (_state, action) => action.payload
  },
  []
);

export default combineReducers({
  isLoading,
  records
});
