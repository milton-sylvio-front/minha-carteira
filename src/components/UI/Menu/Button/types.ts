import type { IButtonProps } from '@/components/UI/Button/types';

export type IMenuButtonPositionMenu = 'top' | 'bottom';

export interface IMenuButtonProps extends IButtonProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  isOpen?: boolean;
  onTogglePosition?: (position: IMenuButtonPositionMenu) => void;
}
