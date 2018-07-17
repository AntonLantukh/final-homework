import React, { Component, Fragment } from 'react';
import {
  FormMain,
  FormWrapper,
  FormFields,
  FieldWrapper,
  FieldLabelEmail,
  FieldLabelPassword,
  StyledInput,
  MainButton
} from './Style';
import { Field, Form } from 'react-final-form';
import Particles from 'react-particles-js';
import ParticlesParams from '../../particles-params';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <FormMain>
          <FormWrapper>
            <img src="./img/Lgo.svg" alt="lofttrade-logo" />
            <div>
              <Form>
                <FormFields>
                  <FieldWrapper>
                    <FieldLabelEmail />
                    <Field
                      type="email"
                      name="email"
                      placeholder="email"
                      component={props => <StyledInput {...props} />}
                    />
                  </FieldWrapper>
                  <FieldWrapper>
                    <FieldLabelPassword />
                    <Field
                      type="password"
                      name="password"
                      placeholder="password"
                      component={props => <StyledInput {...props} />}
                    />
                  </FieldWrapper>
                  <MainButton />
                </FormFields>
              </Form>
            </div>
            <p>
              Впервые на сайте? <a href="">Регистрация</a>
            </p>
            <div />
          </FormWrapper>
        </FormMain>
        <Particles params={ParticlesParams} />
      </Fragment>
    );
  }
}

export default Login;
