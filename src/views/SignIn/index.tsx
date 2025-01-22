import { useState, useEffect } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import {
  FormErrorMessage,
  FormGroup,
  FormLabel,
  UiAlert,
  UiButton,
  UiInput,
  UiVStack,
} from '../../components/UI';

import AuthTemplate from '../../templates/Auth';

import { PATHS } from '../../helpers/configs/paths';
import { REQUIRED_FIELD } from '../../helpers/utils/constants';

import { useSignIn } from './useSignIn';
import type { IUserData } from './types';
import { ContainerLinkToGo, LinkToGo } from './styles';

const { DASHBOARD, RECOVERY_PASSWORD, SIGN_UP } = PATHS;

const SignIn = () => {
  const navigate = useNavigate();
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>();
  const { login, loader, error, user, loading } = useSignIn();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }

    if (user) {
      navigate(DASHBOARD.url);
    }
  }, [user, loading, navigate]);

  const toggleType = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  const onSubmit = (values: IUserData) => {
    if (values.email && values.password) {
      login(values.email, values.password);
    }
  };

  const inputPassw = (field) => (
    <UiInput
      className={errors?.password && 'error'}
      icon={MdLock}
      id="passw"
      type={passwordShow ? 'text' : 'password'}
      {...field}
    />
  );

  const inputEmail = (field) => (
    <UiInput className={errors?.email && 'error'} icon={MdEmail} {...field} />
  );

  const showAlert = () => {
    if (error && !loading && !loader) {
      return <UiAlert closeBtn mb={4} message={error} type="error" />;
    }
  };

  return (
    <AuthTemplate>
      <h1>Entrar</h1>

      {showAlert()}

      <form onSubmit={handleSubmit(onSubmit)}>
        <UiVStack>
          <FormGroup>
            <FormLabel htmlFor="email">E-mail</FormLabel>

            <Controller
              name="email"
              render={({ field }) => inputEmail(field)}
              control={control}
              rules={{
                required: REQUIRED_FIELD,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Digite um email válido',
                },
              }}
            />

            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="passw">
              <span>Senha</span>
              <small onClick={toggleType}>
                {passwordShow ? 'Ocultar' : 'Mostrar'}
              </small>
            </FormLabel>

            <Controller
              name="password"
              render={({ field }) => inputPassw(field)}
              control={control}
              rules={{
                required: REQUIRED_FIELD,
              }}
            />

            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormGroup>

          <ContainerLinkToGo>
            <LinkToGo
              to={RECOVERY_PASSWORD.url}
              title="Clique aqui para recuperar a sua senha"
            >
              Recuperar Senha
            </LinkToGo>
          </ContainerLinkToGo>

          <UiButton
            disabled={loader}
            fullWidth
            isLoading={loader}
            type="submit"
          >
            Acessar
          </UiButton>
        </UiVStack>
      </form>

      <p>
        Não tem cadastro?
        <Link to={SIGN_UP.url} title="Clique aqui e cadastre-se">
          Clique aqui
        </Link>
      </p>
    </AuthTemplate>
  );
};

export default SignIn;
