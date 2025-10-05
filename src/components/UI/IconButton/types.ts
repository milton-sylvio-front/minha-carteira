import type { IButtonProps } from '@/components/UI/Button/types';

export interface IIconButtonProps extends IButtonProps {
  isRound?: boolean;
  'aria-label': string;
}
