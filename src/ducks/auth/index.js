import auth from './reducer';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure
} from './action';
import {
  getIsAuthorized,
  getIsRegistrationError,
  getIsLoginError
} from './selector';

export {
  auth,
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  getIsAuthorized,
  getIsRegistrationError,
  getIsLoginError
};
