import auth from './reducer';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registrationRequest,
  registrationSuccess,
  registrationFailure
} from './action';
import {
  getIsAuthorized,
  getIsRegistrationError,
  getIsLoginError,
  loginError,
  registrationError
} from './selector';

export {
  auth,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  getIsAuthorized,
  getIsRegistrationError,
  getIsLoginError,
  loginError,
  registrationError
};
