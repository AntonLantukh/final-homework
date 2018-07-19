export const getIsAuthorized = state => state.auth.isAuthorized;
export const getIsRegistrationError = state =>
  state.auth.registrationError !== null;
export const getIsLoginError = state => state.auth.loginError !== null;
export const loginError = state => state.auth.loginError;
export const registrationError = state =>
  state.auth.registrationError ? state.auth.registrationError.email : null;
