import React, { Component, Fragment } from 'react';
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
import Particles from 'react-particles-js';
import ParticlesParams from '../../particles-params';
import logo from './img/Logo.svg';
import userShape from './img/user-shape.svg';
import padlock from './img/padlock-unlock.svg';

class Login extends Component {
  state = {
    type: 'login'
  };

  handleSubmit = () => {};

  changeAction = event => {
    event.preventDefault();
    const action = this.state.action === 'login' ? 'registration' : 'login';
    this.setState((state) => ({
      type: action 
    }));
  };

  render() {
    const { initialValues } = this.state;
    return (
      <Form
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        render={() => (
          <Fragment>
            <FormMain>
              <FormWrapper>
                <img src={logo} alt="lofttrade-logo" />
                <div>
                  <FormFields>
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
                    <MainButton>Войти</MainButton>
                  </FormFields>
                </div>
                <div>
                  <p>
                    Впервые на сайте? <a href="/" onClick={this.changeAction}>Регистрация</a>
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

export default Login;
