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
  UiBox,
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

import { REQUIRED_FIELD } from '@/helpers/utils';

import { TRANSACTIONS_ARR } from '../../utils/arrays';
import { clearFormatValue, toCurrencyMask } from '../../utils/utils';
import { useTransactions } from '../../hooks/useTransactions';

import type { IProps } from './types';

type FormValues = {
  amount: string;
  date: string;
  description: string;
  frequency: string;
  type: string;
};

export const Modal = ({
  isOpen,
  mode = 'create',
  onClose,
  onSuccess,
  transaction,
}: IProps) => {
  const [newInsert, setNewInsert] = useState<boolean>(true);
  const [status, setStatus] = useState<'success' | 'error'>('success');
  const [paid, setPaid] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [types, setTypes] = useState<string>(TRANSACTIONS_ARR.types[0].value);
  const [frequencies, setFrequencies] = useState<string>(
    TRANSACTIONS_ARR.frequencies[0].value
  );
  const { insert, update, remove, error, loadingPage, success } =
    useTransactions();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const resetForm = {
    amount: '',
    date: '',
    description: '',
    frequency: TRANSACTIONS_ARR.frequencies[0].value,
    type: TRANSACTIONS_ARR.types[0].value,
  };

  useEffect(() => {
    if (error || success) {
      setStatus(success ? 'success' : 'error');
      onSuccess(true);
    }
  }, [error, onSuccess, success]);

  useEffect(() => {
    if ((error || success) && newInsert && !loadingPage && mode === 'create') {
      const statusOnSubmit = success ? 'success' : 'error';
      setStatus(statusOnSubmit);
      setPaid(false);
      reset(resetForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, loadingPage, mode, newInsert, reset, success]);

  useEffect(() => {
    if (!isOpen) {
      setPaid(false);
      setTypes(TRANSACTIONS_ARR.types[0].value);
      setFrequencies(TRANSACTIONS_ARR.frequencies[0].value);
      reset(resetForm);
      onSuccess(false);
      setNewInsert(true);
      setAlert(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onSuccess, reset]);

  useEffect(() => {
    if (!isOpen || mode !== 'edit' || !transaction) return;

    setTypes(transaction.type);
    setFrequencies(transaction.frequency);
    setPaid(!!transaction.paid);
    setNewInsert(true);
    setAlert(false);
    reset({
      amount: toCurrencyMask(Number(transaction.amount)),
      date: transaction.date,
      description: transaction.description,
      frequency: transaction.frequency,
      type: transaction.type,
    });
  }, [isOpen, mode, reset, transaction]);

  const onSubmit = (values: FormValues) => {
    if (values.description && values.amount && values.date) {
      const data = {
        amount: clearFormatValue(values.amount),
        date: values.date,
        description: values.description,
        frequency: frequencies,
        paid,
        type: types,
      };

      if (mode === 'edit' && transaction?.id) {
        update(transaction.id, data);
      } else {
        insert({
          ...data,
          created: new Date().getTime(),
        });
      }

      setNewInsert(false);
      setAlert(true);
    }
  };

  const onDelete = () => {
    if (!transaction?.id) return;

    remove(transaction.id);
    setNewInsert(false);
    setAlert(true);
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

  const modalTitle =
    mode === 'delete'
      ? 'Excluir transação'
      : mode === 'edit'
        ? 'Editar transação'
        : 'Adicionar nova transação';

  const handleFormSubmit =
    mode === 'delete'
      ? (event: React.FormEvent) => event.preventDefault()
      : handleSubmit(onSubmit);

  return (
    <UiModal isOpen={!!isOpen} onClose={onClose} size="sm">
      <form onSubmit={handleFormSubmit}>
        <UiModalHeader onClickClose={onClose}>{modalTitle}</UiModalHeader>

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
          ) : mode === 'delete' ? (
            <UiBox>
              Tem certeza que deseja excluir a transação{' '}
              <strong>{transaction?.description}</strong>? Essa ação não pode
              ser desfeita.
            </UiBox>
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
                  type="button"
                  variant="outline"
                >
                  Cancelar
                </UiButton>

                {mode === 'delete' ? (
                  <UiButton
                    fullWidth
                    onClick={onDelete}
                    title="Excluir"
                    type="button"
                  >
                    Excluir
                  </UiButton>
                ) : (
                  <UiButton fullWidth type="submit" title="Salvar">
                    Salvar
                  </UiButton>
                )}
              </>
            ) : (
              <>
                <UiButton
                  fullWidth
                  onClick={onClose}
                  title="Fechar"
                  type="button"
                  variant="outline"
                >
                  Fechar
                </UiButton>

                {mode === 'create' && (
                  <UiButton
                    fullWidth
                    onClick={handlerOnNewInsert}
                    type="button"
                    title="Nova"
                  >
                    Nova
                  </UiButton>
                )}
              </>
            ))}
        </UiModalFooter>
      </form>
    </UiModal>
  );
};
