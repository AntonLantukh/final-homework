import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  FormMain,
  FormWrapper,
  FormFields,
  FieldWrapper,
  FieldLabel,
  StyledInput,
  MainButton,
  Warning,
  Container
} from './Style';
import { Field, Form } from 'react-final-form';
import {
  loginRequest,
  registrationRequest,
  getIsLoginError,
  getIsRegistrationError,
  loginError,
  registrationError,
  getIsAuthorized
} from '../../ducks/auth';
import Particles from 'react-particles-js';
import ParticlesParams from '../../particles-params';
import logo from './img/Logo.svg';
import userShape from './img/user-shape.svg';
import padlock from './img/padlock-unlock.svg';

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  isLoginError: getIsLoginError(state),
  isRegistrationError: getIsRegistrationError(state),
  loginError: loginError(state),
  registrationError: registrationError(state)
});

const mapDispatchToProps = { loginRequest, registrationRequest };

const Input = ({ input, placeholder }) => {
  return <StyledInput {...input} placeholder={placeholder} />;
};

export class Login extends Component {
  state = {
    type: 'login'
  };

  handleSubmit = values => {
    const { type } = this.state;
    const { email, password } = values;
    if (type === 'login') {
      this.props.loginRequest({ email, password });
    } else {
      this.props.registrationRequest({ email, password });
    }
  };

  changeAction = event => {
    event.preventDefault();
    const action = this.state.type === 'login' ? 'registration' : 'login';
    this.setState(state => ({
      type: action
    }));
  };

  render() {
    const { type } = this.state;
    const {
      isLoginError,
      isRegistrationError,
      loginError,
      registrationError,
      isAuthorized
    } = this.props;

    if (isAuthorized) {
      return <Redirect to="/" />;
    }

    return (
      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => (
          <Container>
            <FormMain>
              <FormWrapper>
                <img src={logo} alt="lofttrade-logo" />
                <div>
                  <FormFields onSubmit={handleSubmit}>
                    <FieldWrapper>
                      <FieldLabel src={userShape} />
                      <Field
                        type="email"
                        name="email"
                        placeholder="email"
                        component={Input}
                      />
                    </FieldWrapper>
                    <FieldWrapper>
                      <FieldLabel src={padlock} />
                      <Field
                        type="password"
                        name="password"
                        placeholder="password"
                        component={Input}
                      />
                    </FieldWrapper>
                    <MainButton type="submit">
                      {type === 'login' ? 'Войти? ' : 'Зарегистрироваться'}
                    </MainButton>
                    {isLoginError && <Warning>{loginError}</Warning>}
                    {isRegistrationError && (
                      <Warning>{registrationError}</Warning>
                    )}
                  </FormFields>
                </div>
                <div>
                  <p>
                    {type === 'login'
                      ? 'Впервые на сайте? '
                      : 'Уже зарегистрированы? '}
                    <a href="/" onClick={this.changeAction}>
                      {type === 'login' ? 'Регистрация' : 'Войти'}
                    </a>
                  </p>
                </div>
              </FormWrapper>
            </FormMain>
            <Particles params={ParticlesParams} />
          </Container>
        )}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
