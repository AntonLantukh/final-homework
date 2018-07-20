import { createActions } from 'redux-actions';

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registrationRequest,
  registrationSuccess,
  registrationFailure
} = createActions(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',
  'LOGOUT',
  'REGISTRATION_REQUEST',
  'REGISTRATION_SUCCESS',
  'REGISTRATION_FAILURE'
);
