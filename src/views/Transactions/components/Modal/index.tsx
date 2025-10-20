import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

import { CurrencyInput } from '@/components/CurrencyInput';
import {
  FormContainer,
  FormErrorMessage,
  FormGroup,
  FormLabel,
  UiAlert,
  UiButton,
  UiButtonGroup,
  UiCircularProgress,
  UiFlex,
  UiInput,
  UiModal,
  UiModalContent,
  UiModalFooter,
  UiModalHeader,
  UiRadioButton,
  UiToggleSwitch,
} from '@/components/UI';

import { REQUIRED_FIELD } from '@/helpers/utils/constants';

import { TRANSACTIONS_ARR } from '../../utils/arrays';
import { clearFormatValue } from '../../utils/utils';
import { useTransactions } from '../../hooks/useTransactions';
import type { IDataTransactionsProps } from '../../types';

import type { IProps } from './types';

export const Modal = ({ isOpen, onClose, onSuccess }: IProps) => {
  const [newInsert, setNewInsert] = useState<boolean>(true);
  const [status, setStatus] = useState<'success' | 'error'>('success');
  const [paid, setPaid] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [types, setTypes] = useState<string>(TRANSACTIONS_ARR.types[0].value);
  const [frequencies, setFrequencies] = useState<string>(
    TRANSACTIONS_ARR.frequencies[0].value
  );
  const { insert, error, loadingPage, success } = useTransactions();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IDataTransactionsProps>();

  const resetForm = {
    amount: null,
    date: '',
    description: '',
    frequency: TRANSACTIONS_ARR.frequencies[0].value,
    type: TRANSACTIONS_ARR.types[0].value,
  };

  useEffect(() => {
    if (error || success) {
      onSuccess(true);
    }
  }, [error, onSuccess, success]);

  useEffect(() => {
    if ((error || success) && newInsert && !loadingPage) {
      const statusOnSubmit = success ? 'success' : 'error';
      setStatus(statusOnSubmit);
      setPaid(false);
      reset(resetForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, loadingPage, newInsert, reset, success]);

  useEffect(() => {
    if (!isOpen) {
      setPaid(false);
      reset(resetForm);
      onSuccess(false);
      setNewInsert(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onSuccess, reset]);

  const onSubmit = (values: IDataTransactionsProps) => {
    if (values.description && values.amount && values.date) {
      const data = {
        amount: clearFormatValue(values.amount),
        created: new Date().getTime(),
        date: values.date,
        description: values.description,
        frequency: frequencies,
        paid: paid,
        type: types,
      };

      insert(data);
      setNewInsert(false);
      setAlert(true);
    }
  };

  const Alert = () =>
    (error || success) &&
    alert &&
    !loadingPage && (
      <UiAlert closeBtn mb={4} message={error || success} type={status} />
    );

  const handlerTypeOnchange = (value: string) => setTypes(value);
  const handlerFrequenciesOnchange = (value: string) => setFrequencies(value);

  const inputDescription = (field: FieldValues) => (
    <UiInput
      className={errors?.description && 'error'}
      disabled={loadingPage}
      id="description"
      type="text"
      placeholder="Ex.: Conta de água"
      {...field}
    />
  );

  const inputDate = (field: FieldValues) => (
    <UiInput
      className={errors?.date && 'error'}
      disabled={loadingPage}
      id="date"
      type="date"
      placeholder="__/__/____"
      {...field}
    />
  );

  const inputAmount = (field: FieldValues) => (
    <UiInput
      className={errors?.amount && 'error'}
      disabled={loadingPage}
      id="amount"
      maskInput={CurrencyInput}
      inputSize="md"
      placeholder="R$ XX.XXX,XX"
      {...field}
    />
  );

  const handlerOnNewInsert = (e: React.MouseEvent) => {
    e.preventDefault();

    setNewInsert(true);
    setPaid(false);
    reset(resetForm);
    setAlert(false);
  };

  return (
    <UiModal isOpen={!!isOpen} onClose={() => onClose} size="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <UiModalHeader onClickClose={onClose}>
          Adicionar nova transação
        </UiModalHeader>

        <UiModalContent>
          <Alert />

          {loadingPage || !newInsert ? (
            <UiFlex
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
            >
              <UiCircularProgress type={status} />
            </UiFlex>
          ) : (
            <>
              <FormGroup>
                <FormLabel htmlFor="description">Descrição</FormLabel>

                <Controller
                  name="description"
                  render={({ field }) => inputDescription(field)}
                  control={control}
                  rules={{
                    required: REQUIRED_FIELD,
                  }}
                />

                <FormErrorMessage>
                  {errors?.description?.message}
                </FormErrorMessage>
              </FormGroup>

              <FormGroup>
                <FormLabel>Tipo</FormLabel>

                <UiButtonGroup
                  aria-label="Tipos de transações"
                  className="btn-group-toggle"
                  role="group"
                  fullWidth
                >
                  <UiRadioButton
                    name="type"
                    options={TRANSACTIONS_ARR.types}
                    onChange={handlerTypeOnchange}
                    selectedValue={types}
                    disabled={loadingPage}
                    size="md"
                  />
                </UiButtonGroup>
              </FormGroup>

              <FormContainer>
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

              <FormGroup>
                <FormLabel>Frequência</FormLabel>

                <UiButtonGroup
                  aria-label="Tipos de frequência"
                  className="btn-group-toggle"
                  role="group"
                  fullWidth
                >
                  <UiRadioButton
                    name="frequency"
                    options={TRANSACTIONS_ARR.frequencies}
                    onChange={handlerFrequenciesOnchange}
                    selectedValue={frequencies}
                    disabled={loadingPage}
                    size="md"
                  />
                </UiButtonGroup>
              </FormGroup>

              <UiToggleSwitch
                checked={paid}
                onChange={() => setPaid(!paid)}
                labelRight="Paga"
              />
            </>
          )}
        </UiModalContent>

        <UiModalFooter>
          {!loadingPage &&
            (newInsert ? (
              <>
                <UiButton
                  fullWidth
                  onClick={onClose}
                  title="Cancelar"
                  variant="outline"
                >
                  Cancelar
                </UiButton>

                <UiButton fullWidth type="submit" title="Salvar">
                  Salvar
                </UiButton>
              </>
            ) : (
              <>
                <UiButton
                  fullWidth
                  onClick={onClose}
                  title="Fechar"
                  variant="outline"
                >
                  Fechar
                </UiButton>

                <UiButton
                  fullWidth
                  onClick={handlerOnNewInsert}
                  type="button"
                  title="Nova"
                >
                  Nova
                </UiButton>
              </>
            ))}
        </UiModalFooter>
      </form>
    </UiModal>
  );
};
