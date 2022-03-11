import React from 'react';
import { ValidatedField } from 'react-jhipster';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Row, Col, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export interface ILoginModalProps {
  showModal: boolean;
  loginError: boolean;
  handleLogin: (username: string, password: string, rememberMe: boolean) => void;
  handleClose: () => void;
}

const LoginModal = (props: ILoginModalProps) => {
  const login = ({ username, password, rememberMe }) => {
    props.handleLogin(username, password, rememberMe);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm({ mode: 'onTouched' });

  const { loginError, handleClose } = props;

  return (
    <Modal isOpen={props.showModal} toggle={handleClose} backdrop="static" id="login-page" autoFocus={false}>
      <Form onSubmit={handleSubmit(login)}>
        <ModalHeader id="login-title" data-cy="loginTitle" toggle={handleClose}>
          Entrar
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md="12">
              {loginError ? (
                <Alert color="danger" data-cy="loginError">
                  <strong>Falha ao entrar!</strong> Por favor verifique suas credenciais e tente novamente.
                </Alert>
              ) : null}
            </Col>
            <Col md="12">
              <ValidatedField
                name="username"
                label="Nome de usuário"
                placeholder="Seu usuário"
                required
                autoFocus
                data-cy="username"
                validate={{ required: 'Usuário não pode ser vazio!' }}
                register={register}
                error={errors.username}
                isTouched={touchedFields.username}
              />
              <ValidatedField
                name="password"
                type="password"
                label="Senha"
                placeholder="Sua senha"
                required
                data-cy="password"
                validate={{ required: 'Senha não pode ser vazia!' }}
                register={register}
                error={errors.password}
                isTouched={touchedFields.password}
              />
              <ValidatedField name="rememberMe" type="checkbox" check label="Lembrar-me" value={true} register={register} />
            </Col>
          </Row>
          <div className="mt-1">&nbsp;</div>
          <Alert color="warning">
            <Link to="/account/reset/request" data-cy="forgetYourPasswordSelector">
              Você esqueceu sua senha?
            </Link>
          </Alert>
          <Alert color="warning">
            <span>Você não possui uma conta ainda?</span> <Link to="/account/register">Registre uma nova conta</Link>
          </Alert>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleClose} tabIndex={1}>
            Cancelar
          </Button>{' '}
          <Button color="primary" type="submit" data-cy="submit">
            Entrar
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default LoginModal;
