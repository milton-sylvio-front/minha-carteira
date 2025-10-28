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
import { Pagination } from '@/components/Pagination';
import { UiBox, UiFlex, UiButton, UiInput } from '@/components/UI';

import { isObjectEmpty } from '@/helpers/utils';

import { DataTable } from './components/DataTable';
import { Modal } from './components/Modal';
import { PageLoading } from './components/PageLoading';

import { PAGE_SIZE, URL_ACTIONS_PARAMS } from './utils/constants';
import { useCategories } from './hooks/useCategories';

export const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, loadingPage, fetch, totalItems } = useCategories();
  const page = Number(searchParams.get('pagina')) || 1;

  const [updateList, setUpdateList] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetch({
      orderField: 'description',
      orderDirection: 'asc',
      pageSize: PAGE_SIZE,
      targetPage: page,
    });
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    if (updateList) {
      fetch({
        orderField: 'description',
        orderDirection: 'asc',
        pageSize: PAGE_SIZE,
        targetPage: 1,
      });
    }
    // eslint-disable-next-line
  }, [page, updateList]);

  const getActions = (status: boolean) => setUpdateList(status);

  const setAction = (action: string) => {
    setSearchParams({ acao: action });
    setOpenModal(true);
  };

  const AddButton = () => (
    <UiButton
      leftIcon={<MdOutlineAdd />}
      onClick={() => setAction(URL_ACTIONS_PARAMS.add)}
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
          <ContentHeader title="Categorias">
            {isObjectEmpty(data) && <AddButton />}
          </ContentHeader>

          <UiBox>
            {!isObjectEmpty(data) ? (
              <>
                <UiFlex
                  alignItems="center"
                  justifyContent="space-between"
                  mb={4}
                >
                  <UiBox maxWidth="300px" width="100%">
                    <UiInput
                      icon={MdOutlineSearch}
                      id="busca-categoria"
                      name="busca-categoria"
                      placeholder="Busque por uma categoria"
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

                <UiBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <DataTable data={data} />
                </UiBox>
              </>
            ) : (
              <EmptyData
                description="Cadastre ao menos uma categoria para visualizar os dados"
                title="Ainda não existem categorias"
              />
            )}
          </UiBox>

          {!isObjectEmpty(data) && totalItems > PAGE_SIZE && (
            <Pagination
              description="Categorias"
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
