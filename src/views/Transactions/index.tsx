import { useState } from 'react';
import {
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
  UiModal,
} from '@/components/UI';
import type { IMenuButtonPositionMenu } from '@/components/UI/Menu/Button/types';

import { Table, Th, Td } from './styles';
import { MOCK_DATA } from './mock';

export const Transactions = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [openDropdownIdx, setOpenDropdownIdx] = useState<number | null>(null);
  const [positionMenu, setPositionMenu] =
    useState<IMenuButtonPositionMenu>('bottom');

  return (
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

        <Table>
          <thead>
            <tr>
              <Th>Título</Th>
              <Th>Categoria</Th>
              <Th>Data</Th>
              <Th>Tipo</Th>
              <Th>Frequência</Th>
              <Th>Valor</Th>
              <Th>Situação</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {MOCK_DATA.map((item, idx) => (
              <tr key={idx}>
                <Td>{item.titulo}</Td>
                <Td>{item.categoria}</Td>
                <Td>{item.data}</Td>
                <Td>{item.tipo}</Td>
                <Td>{item.frequencia}</Td>
                <Td>{item.valor}</Td>
                <Td>
                  <UiBadge
                    colorType={item.situacao === 'PAGA' ? 'success' : 'danger'}
                    size="sm"
                  >
                    {item.situacao}
                  </UiBadge>
                </Td>
                <Td>
                  <UiMenu>
                    <UiMenuButton
                      aria-label={item.titulo}
                      as={UiIconButton}
                      onTogglePosition={() => setPositionMenu(positionMenu)}
                      onClick={() =>
                        setOpenDropdownIdx(openDropdownIdx === idx ? null : idx)
                      }
                      icon={<MdMoreVert />}
                      variant="ghost"
                    />

                    <UiMenuList
                      isOpen={openDropdownIdx === idx}
                      positionMenu={positionMenu}
                      transform="translate(-85%)"
                    >
                      <UiMenuItem icon={<MdCheck />} size="sm" title="Efetivar">
                        Efetivar
                      </UiMenuItem>
                      <UiMenuItem icon={<MdEdit />} size="sm" title="Editar">
                        Editar
                      </UiMenuItem>
                      <UiDivider />
                      <UiMenuItem icon={<MdDelete />} size="sm" title="Apagar">
                        Apagar
                      </UiMenuItem>
                    </UiMenuList>
                  </UiMenu>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </UiBox>

      <UiModal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h2>Título do Modal</h2>
        <p>Conteúdo do modal aqui.</p>
        <button onClick={() => setOpenModal(false)}>Fechar</button>
      </UiModal>
    </>
  );
};
