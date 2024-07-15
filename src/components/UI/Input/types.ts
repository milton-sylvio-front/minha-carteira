import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType;
  maskInput?: React.ComponentType;
  mask?: (string | RegExp)[];
}
