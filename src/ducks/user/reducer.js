import { handleActions } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-actions';
import { combineReducers } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import {
  getUserInfoRequest,
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
    [getUserInfoRequest]: (_state, action) => true,
    [getUserInfoSucess]: (_state, action) => false,
    [getUserInfoFailure]: (_state, action) => false
  },
  false
);

const error = handleActions(
  {
    [getUserInfoFailure]: (_state, action) => action.payload,
    [getUserInfoRequest]: (_state, action) => null
  },
  null
);

export default combineReducers({
  info,
  isLoading,
  error
});
