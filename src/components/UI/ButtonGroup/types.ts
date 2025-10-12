import type { ReactNode, HTMLAttributes } from 'react';

export interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  fullWidth?: boolean;
}
