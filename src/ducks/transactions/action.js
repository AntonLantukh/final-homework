import { createActions } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-actions';

export const {
  transactions: {
    fetchUserTransactionsRequest,
    fetchUserTransactionsSuccess,
    fetchUserTransactionsFailure
  }
} = createActions({
  TRANSACTIONS: {
    FETCH_USER_TRANSACTIONS_REQUEST: null,
    FETCH_USER_TRANSACTIONS_SUCCESS: null,
    FETCH_USER_TRANSACTIONS_FAILURE: null
  }
});
