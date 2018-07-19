import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure
} from './action';

const isAuthorized = handleActions(
  {
    [loginSuccess]: (_state, action) => true,
    [registrationSuccess]: (_state, action) => true
  },
  false
);

const loginError = handleActions(
  {
    [loginRequest]: (_state, action) => null,
    [loginFailure]: (_state, action) => action.payload
  },
  null
);

const registrationError = handleActions(
  {
    [registrationRequest]: (_state, action) => null,
    [registrationFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isAuthorized,
  loginError,
  registrationError
});
