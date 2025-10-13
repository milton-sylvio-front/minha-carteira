import { useEffect, useState, useRef } from 'react';
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
  UiInput,
  UiModal,
  UiModalContent,
  UiModalFooter,
  UiModalHeader,
  UiRadioButton,
  UiToggleSwitch,
} from '@/components/UI';
import type { IModalProps } from '@/components/UI/Modal/Modal/types';

import { REQUIRED_FIELD } from '@/helpers/utils/constants';

import { TRANSACTIONS_ARR } from '../../utils/arrays';
import { useTransactions } from '../../hooks/useTransactions';
import type { IDataTransactionsProps } from '../../types';

export interface IProps extends Partial<IModalProps> {
  onSuccess: (isSuccess: boolean) => void;
}

export const Modal = ({ isOpen, onClose, onSuccess }: IProps) => {
  const btnCancelRef = useRef<HTMLButtonElement>(null);
  const [paid, setPaid] = useState<boolean>(false);
  const [types, setTypes] = useState<string>(TRANSACTIONS_ARR.types[0].value);
  const [frequencies, setFrequencies] = useState<string>(
    TRANSACTIONS_ARR.frequencies[0].value
  );
  const { add, error, loadingPage, success } = useTransactions();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IDataTransactionsProps>();

  useEffect(() => {
    if (success && !loadingPage) {
      reset({
        description: '',
        type: TRANSACTIONS_ARR.types[0].value,
        amount: 0.0,
        frequency: TRANSACTIONS_ARR.frequencies[0].value,
        date: '',
        paid: false,
      });

      onSuccess(true);

      setTimeout(() => {
        if (btnCancelRef.current) {
          btnCancelRef.current.click();
        }
      }, 2500);
    }
  }, [loadingPage, isOpen, onSuccess, reset, success]);

  const onSubmit = (values: IDataTransactionsProps) => {
    if (values.description && values.amount && values.date) {
      const data = {
        amount: Number(
          values.amount
            .toString()
            .replace('R$ ', '')
            .replace('.', '')
            .replace(',', '.')
        ),
        created: new Date().getTime(),
        description: values.description,
        frequency: frequencies,
        date: values.date,
        paid: paid,
        type: types,
      };

      add(data);
    }
  };

  const Alert = () => {
    if ((error || success) && !loadingPage) {
      const alertType = error ? 'error' : 'success';

      return (
        <UiAlert
          closeBtn
          mb={4}
          mt={4}
          message={error || success}
          type={alertType}
        />
      );
    }
  };

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

  return (
    <UiModal isOpen={!!isOpen} onClose={() => onClose} size="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <UiModalHeader onClickClose={onClose}>
          Adicionar nova transação
        </UiModalHeader>

        <Alert />

        <UiModalContent>
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

            <FormErrorMessage>{errors?.description?.message}</FormErrorMessage>
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
        </UiModalContent>

        <UiModalFooter>
          <UiButton
            ref={btnCancelRef}
            onClick={onClose}
            disabled={loadingPage}
            variant="outline"
          >
            Cancelar
          </UiButton>

          <UiButton
            disabled={loadingPage}
            isLoading={loadingPage}
            type="submit"
            title="Salvar"
          >
            Salvar
          </UiButton>
        </UiModalFooter>
      </form>
    </UiModal>
  );
};
