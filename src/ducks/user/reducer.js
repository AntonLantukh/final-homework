import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getUserInfoReguest,
  getUserInfoSucess,
  getUserInfoFailure
} from './action';

const info = handleActions(
  {
    [getUserInfoSucess]: (_state, action) => action.payload
  },
  {}
);

const isLoading = handleActions(
  {
    [getUserInfoReguest]: (_state, action) => true,
    [getUserInfoSucess]: (_state, action) => false,
    [getUserInfoFailure]: (_state, action) => false
  },
  false
);

const error = handleActions(
  {
    [getUserInfoFailure]: (_state, action) => action.payload,
    [getUserInfoReguest]: (_state, action) => null
  },
  null
);

export default combineReducers({
  info,
  isLoading,
  error
});
