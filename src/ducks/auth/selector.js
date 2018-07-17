export const getIsAuthorized = state => state.auth.isAuthorized;
export const getIsRegistrationError = state =>
  state.auth.registrationError !== null;
export const getIsLoginError = state => state.auth.loginError !== null;
