import React from 'react';
import { Login } from './Login';
import { mount } from 'enzyme';

describe('Компонент Login', () => {
    const wrapper = mount(
    <Login
      isLoginError={false}
      isRegistrationError={false}
      loginError={null}
      registrationError={null}
      isAuthorized={false}
  />);
  console.log(wrapper.debug())
    it('При изменении стейта меняет форму авторизация/регистрация', () => {
     wrapper.setState({ type: 'registration' });
     expect(wrapper.find('button').text()).toEqual('Зарегистрироваться')
    });
  });