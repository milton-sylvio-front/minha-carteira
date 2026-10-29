import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MdOutlineFilterAlt,
  MdSort,
  MdOutlineAdd,
  MdOutlineSearch,
} from 'react-icons/md';

import { isObjectEmpty } from '@/helpers/utils';

import { ContentHeader } from '@/components/ContentHeader';
import { EmptyData } from '@/components/EmptyData';
import { UiBox, UiFlex, UiButton, UiInput } from '@/components/UI';
import { Pagination } from '@/components/Pagination';

import { useCategories } from '@/pages/Categories/hooks/useCategories';
import { PAGE_SIZE as CATEGORIES_PAGE_SIZE } from '@/pages/Categories/utils/constants';

import { DataTable } from './components/DataTable';
import { Modal } from './components/Modal';
import { PageLoading } from './components/PageLoading';
import { useTransactions } from './hooks/useTransactions';

import { PAGE_SIZE } from './utils/constants';
import type { IDataTransactionsProps } from './types';
import type { TransactionModalMode } from './components/Modal/types';

export const Transactions = () => {
  const [searchParams] = useSearchParams();
  const { data, loadingPage, fetch, totalItems } = useTransactions();
  const { data: categories, fetch: fetchCategories } = useCategories();

  const page = Number(searchParams.get('pagina')) || 1;

  const [updateList, setUpdateList] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<TransactionModalMode>('create');
  const [selectedTransaction, setSelectedTransaction] = useState<
    IDataTransactionsProps | undefined
  >();

  useEffect(() => {
    fetch({
      orderField: 'paid',
      orderDirection: 'asc',
      pageSize: PAGE_SIZE,
      targetPage: page,
    });
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    fetchCategories({
      orderField: 'description',
      orderDirection: 'asc',
      pageSize: CATEGORIES_PAGE_SIZE,
      targetPage: 1,
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (updateList) {
      fetch({
        orderField: 'paid',
        orderDirection: 'asc',
        pageSize: PAGE_SIZE,
        targetPage: page,
      });
    }
    // eslint-disable-next-line
  }, [page, updateList]);

  const getActions = (status: boolean) => setUpdateList(status);

  const openTransactionModal = (
    mode: TransactionModalMode,
    transaction?: IDataTransactionsProps
  ) => {
    setModalMode(mode);
    setSelectedTransaction(transaction);
    setOpenModal(true);
  };

  const closeTransactionModal = () => setOpenModal(false);

  const AddButton = () => (
    <UiButton
      leftIcon={<MdOutlineAdd />}
      onClick={() => openTransactionModal('create')}
      size="sm"
      variant="primary"
    >
      Adicionar nova
    </UiButton>
  );

  return (
    <>
      {loadingPage ? (
        <PageLoading />
      ) : (
        <>
          <ContentHeader title="Transações">
            {isObjectEmpty(data) && <AddButton />}
          </ContentHeader>

          {isObjectEmpty(data) ? (
            <EmptyData
              description="Cadastre ao menos uma transação para visualizar os dados"
              title="Ainda não existem transações"
            />
          ) : (
            <UiBox>
              <UiFlex alignItems="center" justifyContent="space-between" mb={4}>
                <UiBox maxWidth="350px" width="100%">
                  <UiInput
                    icon={MdOutlineSearch}
                    id="busca-transacao"
                    name="busca-transacao"
                    placeholder="Busque por uma transação"
                    inputSize="sm"
                  />
                </UiBox>

                <UiBox display="grid" gridGap={2} gridAutoFlow="column">
                  <UiButton
                    leftIcon={<MdOutlineFilterAlt />}
                    size="sm"
                    variant="outline"
                  >
                    Filtrar
                  </UiButton>
                  <UiButton leftIcon={<MdSort />} size="sm" variant="outline">
                    Ordenar
                  </UiButton>
                  <AddButton />
                </UiBox>
              </UiFlex>

              <DataTable
                categories={categories}
                data={data}
                onDelete={(transaction) =>
                  openTransactionModal('delete', transaction)
                }
                onEdit={(transaction) =>
                  openTransactionModal('edit', transaction)
                }
              />
            </UiBox>
          )}

          {!isObjectEmpty(data) && totalItems > PAGE_SIZE && (
            <Pagination
              description="Transações"
              pageSize={PAGE_SIZE}
              totalItems={totalItems}
            />
          )}
        </>
      )}

      <Modal
        isOpen={openModal}
        mode={modalMode}
        onClose={closeTransactionModal}
        onSuccess={getActions}
        transaction={selectedTransaction}
      />
    </>
  );
};
