import type React from 'react';
import type { SelectHTMLAttributes } from 'react';

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  required?: boolean;
  children: React.ReactNode;
}
