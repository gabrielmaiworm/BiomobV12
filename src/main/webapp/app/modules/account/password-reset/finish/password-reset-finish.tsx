import React, { useState, useEffect } from 'react';
import { Col, Row, Button } from 'reactstrap';
import { getUrlParameter, ValidatedField, ValidatedForm } from 'react-jhipster';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';

import { handlePasswordResetFinish, reset } from '../password-reset.reducer';
import PasswordStrengthBar from 'app/shared/layout/password/password-strength-bar';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const PasswordResetFinishPage = (props: RouteComponentProps<{ key: string }>) => {
  const [password, setPassword] = useState('');
  const [key] = useState(getUrlParameter('key', props.location.search));
  const dispatch = useAppDispatch();

  useEffect(
    () => () => {
      dispatch(reset());
    },
    []
  );

  const handleValidSubmit = ({ newPassword }) => dispatch(handlePasswordResetFinish({ key, newPassword }));

  const updatePassword = event => setPassword(event.target.value);

  const getResetForm = () => {
    return (
      <ValidatedForm onSubmit={handleValidSubmit}>
        <ValidatedField
          name="newPassword"
          label="Nova senha"
          placeholder={'Nova senha'}
          type="password"
          validate={{
            required: { value: true, message: 'Sua senha é obrigatória.' },
            minLength: { value: 4, message: 'Sua senha é obrigada a ter pelo menos 4 caracteres.' },
            maxLength: { value: 50, message: 'Sua senha não pode ser maior que 50 caracteres.' },
          }}
          onChange={updatePassword}
          data-cy="resetPassword"
        />
        <PasswordStrengthBar password={password} />
        <ValidatedField
          name="confirmPassword"
          label="Confirme a nova senha"
          placeholder="Confirme a nova senha"
          type="password"
          validate={{
            required: { value: true, message: 'Sua confirmação de senha é obrigatória.' },
            minLength: { value: 4, message: 'Sua confirmação de senha é obrigada a ter pelo menos 4 caracteres.' },
            maxLength: { value: 50, message: 'Sua confirmação de senha não pode ser maior que 50 caracteres.' },
            validate: v => v === password || 'As senhas não são iguais!',
          }}
          data-cy="confirmResetPassword"
        />
        <Button color="success" type="submit" data-cy="submit">
          Validar nova senha
        </Button>
      </ValidatedForm>
    );
  };

  const successMessage = useAppSelector(state => state.passwordReset.successMessage);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="4">
          <h1>Alterar senha</h1>
          <div>{key ? getResetForm() : null}</div>
        </Col>
      </Row>
    </div>
  );
};

export default PasswordResetFinishPage;
