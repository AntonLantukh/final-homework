import React, { Component, Fragment } from 'react';
import {Form, FormWrapper, FormFields, FieldWrapper, FieldLabelEmail, FieldLabelPassword, MainButton} from "./Style";
import { Field, reduxForm } from 'redux-form';
import Particles from 'react-particles-js';
import ParticlesParams from "../../particles-params";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <Form>
          <FormWrapper>
            <img src="./img/Lgo.svg" alt="lofttrade-logo" />
            <div>
              <FormFields>
                <FieldWrapper>
                  <FieldLabelEmail />
                  <Field type="email" name="email" placeholder="email" />
                </FieldWrapper>
                <FieldWrapper>
                  <FieldLabelPassword />
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                </FieldWrapper>
                <MainButton />
              </FormFields>
            </div>
            <p>
              Впервые на сайте? <a href="">Регистрация</a>
            </p>
            <div />
          </FormWrapper>
        </Form>
          <Particles params={ParticlesParams} />
      </Fragment>
    );
  }
}

Field = styled.input`
  width: calc(100% - 62px);
  margin: 10px 0;
  padding: 16px 6px 16px 53px;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 7px;
`;


Login = reduxForm({
  form: 'auth'
})(Login);

export default Login;
