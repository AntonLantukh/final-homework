import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';
import * as styled from './Style';

describe('Компонент Login', () => {
  const handleSubmit = jest.fn();
  const changeAction = jest.fn();
  const wrapper = shallow(
    <Login
      isLoginError={false}
      isRegistrationError={false}
      loginError={null}
      registrationError={null}
      isAuthorized={false}
      handleSubmit={handleSubmit}
      changeAction={changeAction}
    />
  );

  it('При изменении стейта на "registration" меняет ссылку на Войти', () => {
    wrapper.setState({ type: 'registration' });
    const form = wrapper.shallow();
    expect(form.find('a').text()).toEqual('Войти');
  });

  it('При изменении стейта на "login" меняет ссылку на Регистрация', () => {
    wrapper.setState({ type: 'login' });
    const form = wrapper.shallow();
    expect(form.find('a').text()).toEqual('Регистрация');
  });

  it('Содержит метода класса `handleSubmit`', () => {
    const form = wrapper.shallow();
    expect(form.instance().handleSubmit).toBeDefined();
  });

  it('Содержит инпут [name="email"]', () => {
    const form = wrapper.shallow();
    expect(form.find('Field[name="email"]')).toHaveLength(1);
  });

  it('Содержит инпут [name="password"]', () => {
    const form = wrapper.shallow();
    expect(form.find('Field[name="password"]')).toHaveLength(1);
  });

  it('При нажатии на submit вызывает метод handleSubmit', () => {
    const form = wrapper.shallow();
    form.setProps({ onSubmit: handleSubmit });
    form.find(styled.FormFields).simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
