import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import {
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
  UiSelect,
} from '@/components/UI';

import { REQUIRED_FIELD } from '@/helpers/utils/constants';

import { CATEGORIES_ARR } from '../../utils/arrays';
import { useCategories } from '../../hooks/useCategories';
import type { IDataCategoriesProps, ICategoryType } from '../../types';

import type { IProps } from './types';

export const Modal = ({ isOpen, onClose, onSuccess }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { insert, error, loadingPage, success } = useCategories();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IDataCategoriesProps>();

  const [newInsert, setNewInsert] = useState<boolean>(true);
  const [status, setStatus] = useState<'success' | 'error'>('success');
  const [alert, setAlert] = useState<boolean>(false);
  const [types, setTypes] = useState<ICategoryType>(CATEGORIES_ARR[0].value);

  const resetForm = {
    description: '',
    type: CATEGORIES_ARR[0].value,
    parentCategory: '',
  };

  console.log('success:', success);

  useEffect(() => {
    if (success) {
      onSuccess(true);
    }
  }, [success]);

  useEffect(() => {
    if ((error || success) && newInsert && !loadingPage) {
      const statusOnSubmit = success ? 'success' : 'error';
      setStatus(statusOnSubmit);

      reset(resetForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, loadingPage, newInsert, reset, success]);

  useEffect(() => {
    const handleRemoveParam = () => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete('acao');
      setSearchParams(newSearchParams);
    };

    if (!isOpen) {
      reset(resetForm);
      onSuccess(false);
      setNewInsert(true);
      handleRemoveParam();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onSuccess, reset]);

  const onSubmit = (values: IDataCategoriesProps) => {
    if (values.description) {
      const data = {
        created: new Date().getTime(),
        description: values.description,
        parentCategory: values.parentCategory,
        type: types,
        actived: true,
        system: true,
      };

      insert(data);
      setNewInsert(false);
      onSuccess(false);
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

  const selectParentCategory = (field: FieldValues) => (
    <UiSelect
      className={errors?.parentCategory && 'error'}
      disabled={loadingPage}
      id="parentCategory"
      options={[]}
      defaultValue=""
      {...field}
    />
  );

  const handlerOnNewInsert = (e: React.MouseEvent) => {
    e.preventDefault();

    setNewInsert(true);
    reset(resetForm);
    setAlert(false);
    onSuccess(false);
  };

  return (
    <UiModal isOpen={!!isOpen} onClose={() => onClose} size="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <UiModalHeader onClickClose={onClose}>
          Adicionar nova categoria
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
                    options={CATEGORIES_ARR}
                    onChange={handlerTypeOnchange}
                    selectedValue={types}
                    disabled={loadingPage}
                    size="md"
                  />
                </UiButtonGroup>
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="parentCategory">Categoria Pai</FormLabel>

                <Controller
                  name="parentCategory"
                  render={({ field }) => selectParentCategory(field)}
                  control={control}
                />

                <FormErrorMessage>
                  {errors?.parentCategory?.message}
                </FormErrorMessage>
              </FormGroup>
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
