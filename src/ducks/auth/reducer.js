import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registrationRequest,
  registrationSuccess,
  registrationFailure
} from './action';

const isAuthorized = handleActions(
  {
    [loginSuccess]: (_state, action) => true,
    [logout]: (_state, action) => false,
    [registrationSuccess]: (_state, action) => true
  },
  false
);

const loginError = handleActions(
  {
    [registrationRequest]: (_state, action) => null,
    [loginRequest]: (_state, action) => null,
    [loginFailure]: (_state, action) => action.payload,
    [loginSuccess]: (_state, action) => null,
    [registrationSuccess]: (_state, action) => null
  },
  null
);

const registrationError = handleActions(
  {
    [loginRequest]: (_state, action) => null,
    [registrationRequest]: (_state, action) => null,
    [registrationFailure]: (_state, action) => action.payload,
    [loginSuccess]: (_state, action) => null,
    [registrationSuccess]: (_state, action) => null
  },
  null
);

export default combineReducers({
  isAuthorized,
  loginError,
  registrationError
});
