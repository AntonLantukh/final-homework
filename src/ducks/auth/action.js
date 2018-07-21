import { createActions } from 'redux-actions';

export const {
  auth: {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
    registrationRequest,
    registrationSuccess,
    registrationFailure
  }
} = createActions({
  AUTH: {
    LOGIN_REQUEST: null,
    LOGIN_SUCCESS: null,
    LOGIN_FAILURE: null,
    LOGOUT: null,
    REGISTRATION_REQUEST: null,
    REGISTRATION_SUCCESS: null,
    REGISTRATION_FAILURE: null
  }
});
