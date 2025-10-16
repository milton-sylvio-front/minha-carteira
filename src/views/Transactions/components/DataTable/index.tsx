import { useState } from 'react';
import { MdMoreVert, MdCheck, MdEdit, MdDelete } from 'react-icons/md';

import {
  UiBadge,
  UiDivider,
  UiIconButton,
  UiMenu,
  UiMenuButton,
  UiMenuList,
  UiMenuItem,
} from '@/components/UI';
import type { IMenuButtonPositionMenu } from '@/components/UI/Menu/Button/types';

import formatCurrency from '@/helpers/utils/formatCurrency';
import formatDate from '@/helpers/utils/formatDate';

import { TRANSACTIONS_ARR, TITLES_TABLE } from '../../utils/arrays';

import type { IDataTransactionsProps } from '../../types';

import { Table, Th, Td } from './styles';

export interface IProps {
  data: IDataTransactionsProps[];
}

export const DataTable = ({ data }: IProps) => {
  const [openDropdownIdx, setOpenDropdownIdx] = useState<number | null>(null);
  const [positionMenu, setPositionMenu] =
    useState<IMenuButtonPositionMenu>('bottom');

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

  return (
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
              <UiBadge colorType={item.paid ? 'success' : 'danger'} size="sm">
                {item.paid ? 'PAGA' : 'A PAGAR'}
              </UiBadge>
            </Td>
            <Td>
              <UiMenu>
                <UiMenuButton
                  aria-label={item.description}
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
  );
};
