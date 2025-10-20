import type { InputHTMLAttributes } from 'react';
import type { LayoutProps } from 'styled-system';

export interface IInputStylesProps {
  showIcon?: boolean;
}

export type IInputPropsSizes = 'sm' | 'md' | 'lg';

export interface IInputProps
  extends Omit<LayoutProps, 'height' | 'size' | 'width'>,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: React.ComponentType;
  maskInput?: React.ComponentType;
  mask?: (string | RegExp)[];
  inputSize?: IInputPropsSizes;
}
