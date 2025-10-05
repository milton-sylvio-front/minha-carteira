import type { HTMLAttributes } from 'react';

export type IIMenuListPosition = 'top' | 'bottom';

// export interface IDropdownProps {
//   buttonText?: string;
//   children: React.ReactNode;
//   icon?: React.ReactElement;
//   isOpen: boolean;
//   onToggle: () => void;
// }

export interface IUiMenuList extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isOpen: boolean;
  position?: IIMenuListPosition;
}
