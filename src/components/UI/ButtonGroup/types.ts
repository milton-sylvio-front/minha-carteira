import type { ReactNode, HTMLAttributes } from 'react';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
