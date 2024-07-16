import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

import ContentHeader from '../../components/ContentHeader';
import CurrencyInput from '../../components/CurrencyInput';
import {
  FormContainer,
  FormErrorMessage,
  FormGroup,
  FormLabel,
  UiAlert,
  UiCard,
  UiContainer,
  UiButton,
  UiDropdown,
  UiInput,
} from '../../components/UI';

import { REQUIRED_FIELD } from '../../helpers/utils/constants';
import { NEW_REGISTER_ARR } from '../../helpers/utils/arrays';

import { Forms } from './styles';
import type { NewRegisterProps } from './types';
import { useNewRegister } from './useNewRegister';

const { types, frequencies } = NEW_REGISTER_ARR;

const NewRegister = () => {
  const { add, error, loading, success } = useNewRegister();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewRegisterProps>({
    defaultValues: {
      description: '',
      type: '',
      amount: '',
      frequency: '',
      date: '',
    },
  });

  useEffect(() => {
    if (success) {
      reset({
        description: '',
        type: '',
        amount: '',
        frequency: '',
        date: '',
      });
    }
  }, [reset, success]);

  const showAlert = () => {
    if ((error || success) && !loading) {
      const alertType = error ? 'error' : 'success';

      return (
        <UiAlert closeBtn mb={4} message={error || success} type={alertType} />
      );
    }
  };

  const inputDesc = (field: FieldValues) => (
    <UiInput
      className={errors?.description && 'error'}
      id="description"
      type="text"
      placeholder="Ex.: Conta de água"
      {...field}
    />
  );

  const dropdownType = (field: FieldValues) => (
    <UiDropdown
      id="type"
      className={errors?.type && 'error'}
      options={types}
      onChange={() => {}}
      defaultValue="Selecione"
      {...field}
    />
  );

  const inputDate = (field: FieldValues) => (
    <UiInput
      className={errors?.date && 'error'}
      id="date"
      type="date"
      placeholder="__/__/____"
      {...field}
    />
  );

  const dropdownFrequency = (field: FieldValues) => (
    <UiDropdown
      id="frequency"
      className={errors?.frequency && 'error'}
      options={frequencies}
      onChange={() => {}}
      defaultValue="Selecione"
      {...field}
    />
  );

  const inputAmount = (field: FieldValues) => (
    <UiInput
      className={errors?.amount && 'error'}
      id="amount"
      maskInput={CurrencyInput}
      placeholder="R$ XX.XXX,XX"
      {...field}
    />
  );

  const onSubmit = (values: NewRegisterProps) => {
    if (values.description && values.type && values.date) {
      const data = {
        description: values.description,
        type: values.type,
        amount: Number(
          values.amount.replace('R$ ', '').replace('.', '').replace(',', '.')
        ),
        frequency: values.frequency,
        date: values.date,
      };

      add(data);
    }
  };

  return (
    <UiContainer>
      <ContentHeader title="Novo Registro" />

      {showAlert()}

      <UiCard>
        <Forms onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <FormGroup>
              <FormLabel htmlFor="description">Descrição</FormLabel>

              <Controller
                name="description"
                render={({ field }) => inputDesc(field)}
                control={control}
                rules={{
                  required: REQUIRED_FIELD,
                }}
              />

              <FormErrorMessage>
                {errors?.description?.message}
              </FormErrorMessage>
            </FormGroup>
          </FormContainer>

          <FormContainer>
            <FormGroup>
              <FormLabel htmlFor="type">Tipo</FormLabel>

              <Controller
                name="type"
                render={({ field }) => dropdownType(field)}
                control={control}
                rules={{
                  required: REQUIRED_FIELD,
                }}
              />

              <FormErrorMessage>{errors?.type?.message}</FormErrorMessage>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="date">Data</FormLabel>

              <Controller
                name="date"
                render={({ field }) => inputDate(field)}
                control={control}
                rules={{
                  required: REQUIRED_FIELD,
                }}
              />

              <FormErrorMessage>{errors?.date?.message}</FormErrorMessage>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="frequency">Frequência</FormLabel>
              <Controller
                name="frequency"
                render={({ field }) => dropdownFrequency(field)}
                control={control}
                rules={{
                  required: REQUIRED_FIELD,
                }}
              />

              <FormErrorMessage>{errors?.frequency?.message}</FormErrorMessage>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="amount">Valor</FormLabel>
              <Controller
                name="amount"
                render={({ field }) => inputAmount(field)}
                control={control}
                rules={{
                  required: REQUIRED_FIELD,
                  min: 0.01,
                }}
              />

              <FormErrorMessage>{errors?.amount?.message}</FormErrorMessage>
            </FormGroup>
          </FormContainer>

          <FormContainer className="flex-end">
            <FormGroup>
              <UiButton isLoading={loading} disabled={loading} type="submit">
                Cadastrar
              </UiButton>
            </FormGroup>
          </FormContainer>
        </Forms>
      </UiCard>
    </UiContainer>
  );
};

export default NewRegister;
