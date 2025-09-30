import type { IButtonProps } from '@/components/UI/Button/types';

export interface IIconButtonProps extends Omit<IButtonProps, 'icon'> {
  icon?: React.ReactElement;
  isRound?: boolean;
  'aria-label': string;
}
