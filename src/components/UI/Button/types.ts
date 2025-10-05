import type { ButtonHTMLAttributes } from 'react';
import type { SpaceProps } from 'styled-system';

export interface IButtonIcon extends SpaceProps {}

export type IButtonBorderRadiusSizes = 'sm' | 'md' | 'lg' | 'full';
export type IButtonVariants = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: IButtonBorderRadiusSizes;
  children?: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  isLoading?: boolean;
  variant?: IButtonVariants;
}
