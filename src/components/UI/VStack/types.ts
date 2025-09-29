import type { HTMLAttributes } from 'react';

export interface IVStack extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: string;
}
