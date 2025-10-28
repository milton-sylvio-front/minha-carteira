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

import { CATEGORIES_ARR, TITLES_TABLE } from '../../utils/arrays';

import type { IDataCategoriesProps } from '../../types';

export interface IProps {
  data: IDataCategoriesProps[];
}

export const DataTable = ({ data }: IProps) => {
  const [openDropdownIdx, setOpenDropdownIdx] = useState<number | null>(null);
  const [positionMenu, setPositionMenu] =
    useState<IMenuButtonPositionMenu>('bottom');

  const setType = (type: string) => {
    return CATEGORIES_ARR.filter((t) => t.value === type).map((t) => t.label);
  };

  return (
    <UiTable width="auto">
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
            {/* <UiTd>{item.created}</UiTd> */}
            <UiTd>{item.parentCategory || '--'}</UiTd>
            <UiTd>
              <UiBadge
                colorType={item.type === 'gains' ? 'success' : 'danger'}
                size="sm"
              >
                {setType(item.type)}
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
