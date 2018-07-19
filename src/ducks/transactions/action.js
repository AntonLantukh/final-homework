import { createActions } from 'redux-actions';

export const {
  fetchUserTransactionsReguest,
  fetchUserTransactionsSuccess,
  fetchUserTransactionsFailure
} = createActions(
  'FETCH_USER_TRANSACTIONS_REQUEST',
  'FETCH_USER_TRANSACTIONS_SUCESS',
  'FETCH_USER_TRANSACTIONS_FAILURE'
);
