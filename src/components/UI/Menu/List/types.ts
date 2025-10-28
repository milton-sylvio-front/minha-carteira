import type { HTMLAttributes } from 'react';

import type { TranformProps } from '@/types/types';

export type IIMenuListPosition = 'top' | 'bottom';

export interface IUiMenuList
  extends TranformProps,
    HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isOpen: boolean;
  positionMenu?: IIMenuListPosition;
}
