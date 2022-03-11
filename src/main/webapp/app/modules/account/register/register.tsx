import React, { useState, useEffect } from 'react';
import { ValidatedField, ValidatedForm, isEmail } from 'react-jhipster';
import { Row, Col, Alert, Button } from 'reactstrap';
import { toast } from 'react-toastify';

import PasswordStrengthBar from 'app/shared/layout/password/password-strength-bar';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { handleRegister, reset } from './register.reducer';

export const RegisterPage = () => {
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  useEffect(
    () => () => {
      dispatch(reset());
    },
    []
  );

  const handleValidSubmit = ({ username, email, firstPassword }) => {
    dispatch(handleRegister({ login: username, email, password: firstPassword, langKey: 'en' }));
  };

  const updatePassword = event => setPassword(event.target.value);

  const successMessage = useAppSelector(state => state.register.successMessage);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h1 id="register-title" data-cy="registerTitle">
            Cadastro
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          <ValidatedForm id="register-form" onSubmit={handleValidSubmit}>
            <ValidatedField
              name="username"
              label="Usuário"
              placeholder={'Seu usuário'}
              validate={{
                required: { value: true, message: 'Seu usuário é obrigatório.' },
                pattern: {
                  value: /^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$/,
                  message: 'Seu usuário é inválido.',
                },
                minLength: { value: 1, message: 'Seu usuário precisa ter pelo menos 1 caractere.' },
                maxLength: { value: 50, message: 'Seu usuário não pode ter mais do que 50 caracteres.' },
              }}
              data-cy="username"
            />
            <ValidatedField
              name="email"
              label="Email"
              placeholder={'Seu email'}
              type="email"
              validate={{
                required: { value: true, message: 'Seu email é obrigatório.' },
                minLength: { value: 5, message: 'Seu email precisa ter pelo menos 5 caracteres.' },
                maxLength: { value: 254, message: 'Seu email não pode ter mais do que 254 caracteres.' },
                validate: v => isEmail(v) || 'Your email is invalid.',
              }}
              data-cy="email"
            />
            <ValidatedField
              name="firstPassword"
              label="Nova senha"
              placeholder={'Nova senha'}
              type="password"
              onChange={updatePassword}
              validate={{
                required: { value: true, message: 'Sua senha é obrigatória.' },
                minLength: { value: 4, message: 'Sua senha precisa ter pelo menos 4 caracteres.' },
                maxLength: { value: 50, message: 'Sua senha não pode ter mais do que 50 caracteres.' },
              }}
              data-cy="firstPassword"
            />
            <PasswordStrengthBar password={password} />
            <ValidatedField
              name="secondPassword"
              label="Confirmação de senha"
              placeholder="Confirme sua senha"
              type="password"
              validate={{
                required: { value: true, message: 'Sua confirmação é obrigatória.' },
                minLength: { value: 4, message: 'Sua confirmação precisa ter pelo menos 4 caracteres.' },
                maxLength: { value: 50, message: 'Sua confirmação não pode ter mais do que 50 caracteres.' },
                validate: v => v === password || 'As senhas não são iguais!',
              }}
              data-cy="secondPassword"
            />
            <Button id="register-submit" color="primary" type="submit" data-cy="submit">
              Cadastrar-se
            </Button>
          </ValidatedForm>
          <p>&nbsp;</p>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
