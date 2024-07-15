import { useState, useEffect } from 'react'
import MaskedInput from 'react-text-mask'
import { Link, useNavigate } from 'react-router-dom'
import { MdEmail, MdLock, MdPerson, MdPhone } from 'react-icons/md'
import { useForm, Controller } from 'react-hook-form'

import {
  FormContainer,
  FormErrorMessage,
  FormGroup,
  FormLabel,
  UiAlert,
  UiButton,
  UiInput,
} from '../../components/UI'

import { PATHS } from '../../helpers/configs/paths'
import { REQUIRED_FIELD } from '../../helpers/utils/constants'

import { IUserData } from './types'
import { useSignUp } from './useSignUp'

const { DASHBOARD, SIGN_IN } = PATHS

const SignUp = () => {
  const navigate = useNavigate()
  const { register, loader, error, loading, user } = useSignUp()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>()
  const [passwordShow, setPasswordShow] = useState(false)

  useEffect(() => {
    if (loading) return
    if (user) navigate(DASHBOARD.url)
  }, [user, loading])

  const toggleType = () => {
    setPasswordShow(passwordShow ? false : true)
  }

  const showAlert = () => {
    if (error && !loading && !loader) {
      return <UiAlert closeBtn mb={4} message={error} type='error' />
    }
  }

  const onSubmit = (values) => {
    if (values.email && values.password && values.name && values.phone) {
      register(values.email, values.password, values.name, values.phone)
    }
  }

  const inputPassw = (field) => (
    <UiInput
      className={errors?.password && 'error'}
      icon={MdLock}
      id='passw'
      type={passwordShow ? 'text' : 'password'}
      {...field}
    />
  )

  const inputPhone = (field) => (
    <UiInput
      icon={MdPhone}
      className={errors?.phone && 'error'}
      maskInput={MaskedInput}
      mask={[
        '(',
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      type='text'
      id='phone'
      {...field}
    />
  )

  const inputName = (field) => (
    <UiInput
      className={errors?.name && 'error'}
      icon={MdPerson}
      {...field}
      id='name'
      type='text'
    />
  )

  return (
    <>
      <h1>Cadastre-se</h1>

      {showAlert()}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer className='form-vertical'>
          <FormGroup>
            <FormLabel htmlFor='name'>Nome completo</FormLabel>

            <Controller
              name='name'
              render={({ field }) => inputName(field)}
              control={control}
              rules={{
                required: REQUIRED_FIELD,
              }}
            />

            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor='email'>E-mail</FormLabel>
            <Controller
              name='email'
              render={({ field }) => (
                <UiInput
                  className={errors?.email && 'error'}
                  icon={MdEmail}
                  {...field}
                />
              )}
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
            <FormLabel htmlFor='phone'>Telefone</FormLabel>

            <Controller
              name='phone'
              render={({ field }) => inputPhone(field)}
              control={control}
              rules={{
                required: REQUIRED_FIELD,
              }}
            />

            <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor='passw'>
              <span>Senha</span>
              <small onClick={toggleType}>
                {passwordShow ? 'Ocultar' : 'Mostrar'}
              </small>
            </FormLabel>

            <Controller
              name='password'
              render={({ field }) => inputPassw(field)}
              control={control}
              rules={{
                required: REQUIRED_FIELD,
              }}
            />

            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormGroup>

          <FormGroup>
            <UiButton
              type='submit'
              className='block'
              isLoading={loader}
              disabled={loader}
            >
              Cadastrar
            </UiButton>
          </FormGroup>
        </FormContainer>
      </form>

      <p>
        Já tem cadastro?
        <Link to={SIGN_IN.url} title='Clique aqui para entrar'>
          Clique aqui.
        </Link>
      </p>
    </>
  )
}

export default SignUp
