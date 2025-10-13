import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MdArrowForwardIos,
  MdArrowBackIos,
  MdMoreVert,
  MdCheck,
  MdEdit,
  MdDelete,
  MdOutlineFilterAlt,
  MdSort,
  MdOutlineAdd,
  MdOutlineSearch,
} from 'react-icons/md';

import ContentHeader from '@/components/ContentHeader';
import {
  UiBox,
  UiFlex,
  UiBadge,
  UiButton,
  UiDivider,
  UiIconButton,
  UiInput,
  UiMenu,
  UiMenuButton,
  UiMenuItem,
  UiMenuList,
} from '@/components/UI';
import type { IMenuButtonPositionMenu } from '@/components/UI/Menu/Button/types';

import formatCurrency from '@/helpers/utils/formatCurrency';
import formatDate from '@/helpers/utils/formatDate';

import { Modal } from './components/Modal';
import { PageLoading } from './components/PageLoading';
// import { useTransactions } from './hooks/useTransactions';
import { usePaginatedQueryWithUrl } from './hooks/usePaginatedQueryWithUrl';

import { TRANSACTIONS_ARR, TITLES_TABLE } from './utils/arrays';

import { Table, Th, Td } from './styles';

import { PAGE_SIZE } from './utils/constants';
import { formatNumberPage, isObjectEmpty } from './utils/utils';

export const Transactions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, loadingPage, fetchPage, totalItems } = usePaginatedQueryWithUrl(
    {
      orderField: 'created',
      orderDirection: 'desc',
      pageSize: PAGE_SIZE,
    }
  );

  const page = Number(searchParams.get('pagina')) || 1;

  const [updateList, setUpdateList] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDropdownIdx, setOpenDropdownIdx] = useState<number | null>(null);
  const [positionMenu, setPositionMenu] =
    useState<IMenuButtonPositionMenu>('bottom');

  const setPage = (p: number) => setSearchParams({ pagina: String(p + 1) });
  const nextPage = () => setSearchParams({ pagina: String(page + 1) });
  const previousPage = () =>
    page > 1 && setSearchParams({ pagina: String(page - 1) });

  useEffect(() => {
    fetchPage(page);
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    if (updateList) fetchPage(1);
    // eslint-disable-next-line
  }, [page, updateList]);

  const isLastPage = page * PAGE_SIZE >= totalItems;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  console.log('data:', data);

  const setType = (type: string) => {
    const getType = TRANSACTIONS_ARR.types
      .filter((t) => t.value === type)
      .map((t) => t.label);
    return getType;
  };

  const setFrequency = (frequency: string) => {
    const getFrequency = TRANSACTIONS_ARR.frequencies
      .filter((t) => t.value === frequency)
      .map((t) => t.label);
    return getFrequency;
  };

  const getActions = (status: boolean) => setUpdateList(status);

  const getPage = Number(searchParams.get('pagina')) || 1;

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

            {isObjectEmpty(data) ? (
              <h2>Não há dados no momento</h2>
            ) : (
              <Table>
                <thead>
                  <tr>
                    {TITLES_TABLE.map((title, i) => (
                      <Th key={i}>{title}</Th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => (
                    <tr key={item.id}>
                      <Td>{item.description}</Td>
                      <Td>{item.created}</Td>
                      <Td>{formatDate(item.date)}</Td>
                      <Td>{setType(item.type)}</Td>
                      <Td>{setFrequency(item.frequency)}</Td>
                      <Td>{formatCurrency(item.amount)}</Td>
                      <Td>
                        <UiBadge
                          colorType={item.paid ? 'success' : 'danger'}
                          size="sm"
                        >
                          {item.paid ? 'PAGA' : 'A PAGAR'}
                        </UiBadge>
                      </Td>
                      <Td>
                        <UiMenu>
                          <UiMenuButton
                            aria-label={item.description}
                            as={UiIconButton}
                            onTogglePosition={() =>
                              setPositionMenu(positionMenu)
                            }
                            onClick={() =>
                              setOpenDropdownIdx(
                                openDropdownIdx === idx ? null : idx
                              )
                            }
                            icon={<MdMoreVert />}
                            variant="ghost"
                          />

                          <UiMenuList
                            isOpen={openDropdownIdx === idx}
                            positionMenu={positionMenu}
                            transform="translate(-85%)"
                          >
                            <UiMenuItem
                              icon={<MdCheck />}
                              size="sm"
                              title="Efetivar"
                            >
                              Efetivar
                            </UiMenuItem>
                            <UiMenuItem
                              icon={<MdEdit />}
                              size="sm"
                              title="Editar"
                            >
                              Editar
                            </UiMenuItem>
                            <UiDivider />
                            <UiMenuItem
                              icon={<MdDelete />}
                              size="sm"
                              title="Apagar"
                            >
                              Apagar
                            </UiMenuItem>
                          </UiMenuList>
                        </UiMenu>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}

            {!isObjectEmpty(data) && (
              <UiBox
                display="flex"
                alignItems="center"
                gridGap={2}
                justifyContent="flex-end"
                mb={4}
                mt={2}
              >
                <UiButton
                  disabled={page <= 1}
                  leftIcon={<MdArrowBackIos />}
                  onClick={previousPage}
                  size="sm"
                  title="Anterior"
                >
                  Anterior
                </UiButton>

                {new Array(totalPages).fill(null).map((items, idx) => (
                  <UiButton
                    key={items + idx}
                    disabled={getPage === formatNumberPage(idx)}
                    onClick={() => setPage(idx)}
                    title={`Página ${formatNumberPage(idx)}`}
                    variant={
                      getPage === formatNumberPage(idx) ? 'primary' : 'outline'
                    }
                    size="sm"
                  >
                    {formatNumberPage(idx)}
                  </UiButton>
                ))}

                <UiButton
                  disabled={isLastPage}
                  onClick={nextPage}
                  rightIcon={<MdArrowForwardIos />}
                  size="sm"
                  title="Próxima"
                >
                  Próxima
                </UiButton>
                <small>Total: {totalItems}</small>
              </UiBox>
            )}
          </UiBox>
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
