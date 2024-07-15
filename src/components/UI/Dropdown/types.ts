import { SelectHTMLAttributes } from 'react';

export interface IDropdownProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    value: string | number;
    label: string | number;
  }[];
  defaultValue?: string | number;
  id?: string;
  required?: boolean;
  onChange(envent: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}
