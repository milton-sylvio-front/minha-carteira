import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MdOutlineFilterAlt,
  MdSort,
  MdOutlineAdd,
  MdOutlineSearch,
} from 'react-icons/md';

import { ContentHeader } from '@/components/ContentHeader';
import { EmptyData } from '@/components/EmptyData';
import { UiBox, UiFlex, UiButton, UiInput } from '@/components/UI';
import { Pagination } from '@/components/Pagination';

import { DataTable } from './components/DataTable';
import { Modal } from './components/Modal';
import { PageLoading } from './components/PageLoading';
import { useTransactions } from './hooks/useTransactions';

import { PAGE_SIZE } from './utils/constants';
import { isObjectEmpty } from '@/helpers/utils';

export const Transactions = () => {
  const [searchParams] = useSearchParams();
  const { data, loadingPage, fetch, totalItems } = useTransactions();

  const page = Number(searchParams.get('pagina')) || 1;

  const [updateList, setUpdateList] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

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
    if (updateList) {
      fetch({
        orderField: 'paid',
        orderDirection: 'asc',
        pageSize: PAGE_SIZE,
        targetPage: 1,
      });
    }
    // eslint-disable-next-line
  }, [page, updateList]);

  const getActions = (status: boolean) => setUpdateList(status);

  const AddButton = () => (
    <UiButton
      leftIcon={<MdOutlineAdd />}
      onClick={() => setOpenModal(true)}
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

              <DataTable data={data} />
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
        onClose={() => setOpenModal(false)}
        onSuccess={getActions}
        size="sm"
      />
    </>
  );
};
