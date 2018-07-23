import {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
    registrationRequest,
    registrationSuccess,
    registrationFailure,
    auth
  } from './index';
  
  const initialState = {
    isAuthorized: false,
    loginError: 'error',
    registrationError: 'error'
  };
  
  const fakeData = {
    email: 'Test',
    password: 'Test1'
  };


describe('Редьюсер `auth`', () => {
  describe('Экшен `loginRequest`', () => {
    const stateOne = auth(initialState, loginRequest());
  
    it('Очищает ошибку `loginError`', () => {
      expect(stateOne.loginError).toEqual(null);
    });
  
    it('Очищает ошибку `registrationError`', () => {
      expect(stateOne.registrationError).toEqual(null);
    });
  });
  
  describe('Экшен `registrationRequest`', () => {
    const stateTwo = auth(initialState, registrationRequest());
  
    it('Очищает ошибку `loginError`', () => {
      expect(stateTwo.loginError).toEqual(null);
    });
  
    it('Очищает ошибку `registrationError`', () => {
      expect(stateTwo.registrationError).toEqual(null);
    });
  });
  
  describe('Экшен `loginSuccess`', () => {
    const stateThree = auth(initialState, loginSuccess(fakeData));
  
    it('Изменяет флаг `isAuthorized`', () => {
      expect(stateThree.isAuthorized).toEqual(true);
    });
  
    it('Очищает ошибку `loginError`', () => {
      expect(stateThree.loginError).toEqual(null);
    });
  
    it('Очищает ошибку `registrationError`', () => {
      expect(stateThree.registrationError).toEqual(null);
    });
  });
  
  describe('Экшен `registrationSuccess`', () => {
    const stateFour = auth(initialState, registrationSuccess(fakeData));
  
    it('Изменяет флаг `isAuthorized`', () => {
      expect(stateFour.isAuthorized).toEqual(true);
    });
  
    it('Очищает ошибку `loginError`', () => {
      expect(stateFour.loginError).toEqual(null);
    });
  
    it('Очищает ошибку `registrationError`', () => {
      expect(stateFour.registrationError).toEqual(null);
    });
  });
  
  describe('Экшен `loginFailure`', () => {
    const stateFive = auth(initialState, loginFailure(fakeData));
  
    it('Наполняет данными `loginError`', () => {
      expect(stateFive.loginError).toEqual({
        email: 'Test',
        password: 'Test1'
      });
    });
  });
  
  describe('Экшен `registrationFailure`', () => {
    const stateSix = auth(initialState, registrationFailure(fakeData));
  
    it('Наполняет данными `registrationError`', () => {
      expect(stateSix.registrationError).toEqual({
        email: 'Test',
        password: 'Test1'
      });
    });
  });
  
  describe('Экшен `logout`', () => {
    const stateSeven = auth(initialState, logout(fakeData));
  
    it('Изменяет флаг `isAuthorized`', () => {
      expect(stateSeven.isAuthorized).toEqual(false);
    });
  });
});
