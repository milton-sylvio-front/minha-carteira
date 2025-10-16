import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MdOutlineFilterAlt,
  MdSort,
  MdOutlineAdd,
  MdOutlineSearch,
} from 'react-icons/md';

import ContentHeader from '@/components/ContentHeader';
import { EmptyData } from '@/components/EmptyData';
import { UiBox, UiFlex, UiButton, UiInput } from '@/components/UI';

import { DataTable } from './components/DataTable';
import { Modal } from './components/Modal';
import { PageLoading } from './components/PageLoading';
import { Pagination } from './components/Pagination';
import { useTransactions } from './hooks/useTransactions';

import { PAGE_SIZE } from './utils/constants';
import { isObjectEmpty } from './utils/utils';

export const Transactions = () => {
  const [searchParams] = useSearchParams();
  const { data, loadingPage, fetch, totalItems } = useTransactions();

  const page = Number(searchParams.get('pagina')) || 1;

  const [updateList, setUpdateList] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetch({
      orderField: 'created',
      orderDirection: 'desc',
      pageSize: PAGE_SIZE,
      targetPage: page,
    });
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    if (updateList) {
      fetch({
        orderField: 'created',
        orderDirection: 'desc',
        pageSize: PAGE_SIZE,
        targetPage: 1,
      });
    }
    // eslint-disable-next-line
  }, [page, updateList]);

  const getActions = (status: boolean) => setUpdateList(status);

  return (
    <>
      {loadingPage ? (
        <PageLoading />
      ) : (
        <>
          <ContentHeader title="Transações" />

          <UiBox>
            <UiFlex alignItems="center" justifyContent="space-between" mb={4}>
              <UiBox maxWidth="350px" width="100%">
                <UiInput
                  icon={MdOutlineSearch}
                  id="busca-transacao"
                  name="busca-transacao"
                  placeholder="Busque por uma transação"
                />
              </UiBox>

              <UiBox display="grid" gridGap={2} gridAutoFlow="column">
                <UiButton leftIcon={<MdOutlineFilterAlt />} variant="outline">
                  Filtrar
                </UiButton>
                <UiButton leftIcon={<MdSort />} variant="outline">
                  Ordenar
                </UiButton>
                <UiButton
                  variant="primary"
                  leftIcon={<MdOutlineAdd />}
                  onClick={() => setOpenModal(true)}
                >
                  Adicionar nova
                </UiButton>
              </UiBox>
            </UiFlex>

            {isObjectEmpty(data) ? <EmptyData /> : <DataTable data={data} />}
          </UiBox>

          {!isObjectEmpty(data) && <Pagination totalItems={totalItems} />}
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
