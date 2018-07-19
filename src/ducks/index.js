import { combineReducers } from 'redux';
import { auth } from './auth';
import { currency } from './currency';
import { transactions } from './transactions';
import { user } from './user';
import { wallet } from './wallet';

export default combineReducers({
  auth,
  currency,
  transactions,
  user,
  wallet
});
