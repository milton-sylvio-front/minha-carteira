import type { SelectHTMLAttributes } from 'react';

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    value: string | number;
    label: string | number;
  }[];
  defaultValue?: string | number;
  required?: boolean;
}
