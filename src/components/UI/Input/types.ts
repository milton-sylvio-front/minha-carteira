import type { InputHTMLAttributes } from 'react';
import type { LayoutProps } from 'styled-system';

export interface IInputStylesProps {
  showIcon?: boolean;
}

export type IInputStyles = LayoutProps;

export interface IInputProps
  extends Omit<IInputStyles, 'height' | 'size' | 'width'>,
    InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType;
  maskInput?: React.ComponentType;
  mask?: (string | RegExp)[];
}
