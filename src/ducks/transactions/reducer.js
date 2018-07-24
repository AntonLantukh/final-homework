import { handleActions } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-actions';
import { combineReducers } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
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
