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
  UiTable,
  UiTh,
  UiTd,
} from '@/components/UI';
import type { IMenuButtonPositionMenu } from '@/components/UI/Menu/Button/types';

import { formatCurrency, formatDate } from '@/helpers/utils';

import { TRANSACTIONS_ARR, TITLES_TABLE } from '../../utils/arrays';

import type { IDataTransactionsProps } from '../../types';

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
    <UiTable width="100%">
      <thead>
        <tr>
          {TITLES_TABLE.map((title, i) => (
            <UiTh key={i}>{title}</UiTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={item.id}>
            <UiTd>{item.description}</UiTd>
            <UiTd>{item.created}</UiTd>
            <UiTd>{formatDate(item.date)}</UiTd>
            <UiTd>{setType(item.type)}</UiTd>
            <UiTd>{setFrequency(item.frequency)}</UiTd>
            <UiTd>{formatCurrency(Number(item.amount))}</UiTd>
            <UiTd>
              <UiBadge colorType={item.paid ? 'success' : 'danger'} size="sm">
                {item.paid ? 'PAGA' : 'A PAGAR'}
              </UiBadge>
            </UiTd>
            <UiTd>
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
            </UiTd>
          </tr>
        ))}
      </tbody>
    </UiTable>
  );
};
