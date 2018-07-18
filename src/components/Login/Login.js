import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  FormMain,
  FormWrapper,
  FormFields,
  FieldWrapper,
  FieldLabel,
  StyledInput,
  MainButton
} from './Style';
import { Field, Form } from 'react-final-form';
import {
  loginRequest,
  registrationRequest,
  getIsLoginError,
  getIsRegistrationError
} from '../../ducks/auth';
import Particles from 'react-particles-js';
import ParticlesParams from '../../particles-params';
import logo from './img/Logo.svg';
import userShape from './img/user-shape.svg';
import padlock from './img/padlock-unlock.svg';

const mapStateToProps = state => ({
  isLoginError: getIsLoginError(state),
  isRegistrationError: getIsRegistrationError(state)
});

const mapDispatchToProps = { loginRequest, registrationRequest };

class Login extends Component {
  state = {
    type: 'login'
  };

  handleSubmit = values => {
    console.log(values);
    const { action } = this.state;
    const {
      email: { value: email },
      password: { value: password }
    } = values.target;

    if (action === 'login') {
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
    return (
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => (
          <Fragment>
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
                        component={props => <StyledInput {...props} />}
                      />
                    </FieldWrapper>
                    <FieldWrapper>
                      <FieldLabel src={padlock} />
                      <Field
                        type="password"
                        name="password"
                        placeholder="password"
                        component={props => <StyledInput {...props} />}
                      />
                    </FieldWrapper>
                    <MainButton type="submit">
                      {type === 'login' ? 'Войти? ' : 'Зарегистрироваться'}
                    </MainButton>
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
          </Fragment>
        )}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
