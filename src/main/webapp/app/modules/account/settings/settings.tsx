import React, { useEffect } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { ValidatedField, ValidatedForm, isEmail } from 'react-jhipster';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getSession } from 'app/shared/reducers/authentication';
import { saveAccountSettings, reset } from './settings.reducer';

export const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const account = useAppSelector(state => state.authentication.account);
  const successMessage = useAppSelector(state => state.settings.successMessage);

  useEffect(() => {
    dispatch(getSession());
    return () => {
      dispatch(reset());
    };
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);

  const handleValidSubmit = values => {
    dispatch(
      saveAccountSettings({
        ...account,
        ...values,
      })
    );
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="settings-title">Configurações de usuário para {account.login}</h2>
          <ValidatedForm id="settings-form" onSubmit={handleValidSubmit} defaultValues={account}>
            <ValidatedField
              name="firstName"
              label="Primeiro Nome"
              id="firstName"
              placeholder="Seu primeiro nome"
              validate={{
                required: { value: true, message: 'Seu primeiro nome é obrigatório.' },
                minLength: { value: 1, message: 'Seu primeiro nome tem que ter pelo menos 1 caractere.' },
                maxLength: { value: 50, message: 'Seu primeiro nome não pode passar de 50 caracteres.' },
              }}
              data-cy="firstname"
            />
            <ValidatedField
              name="lastName"
              label="Último Nome"
              id="lastName"
              placeholder="Seu último nome"
              validate={{
                required: { value: true, message: 'Seu último nome é obrigatório.' },
                minLength: { value: 1, message: 'Seu último nome tem que ter pelo menos 1 caractere.' },
                maxLength: { value: 50, message: 'Seu último nome não pode passar de 50 caracteres.' },
              }}
              data-cy="lastname"
            />
            <ValidatedField
              name="email"
              label="Email"
              placeholder={'Seu email'}
              type="email"
              validate={{
                required: { value: true, message: 'Seu email é obrigatório.' },
                minLength: { value: 5, message: 'Seu email tem que ter pelo menos 1 caractere.' },
                maxLength: { value: 254, message: 'Seu email não pode passar de 50 caracteres.' },
                validate: v => isEmail(v) || 'Seu email é inválido.',
              }}
              data-cy="email"
            />
            <Button color="primary" type="submit" data-cy="submit">
              Salvar
            </Button>
          </ValidatedForm>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPage;
