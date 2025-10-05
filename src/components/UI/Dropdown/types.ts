// import type { HTMLAttributes } from 'react';

// export interface IDropdownProps
//   extends SelectHTMLAttributes<HTMLSelectElement> {
//   options: {
//     value: string | number;
//     label: string | number;
//   }[];
//   defaultValue?: string | number;
//   id?: string;
//   required?: boolean;
//   onChange(envent: React.ChangeEvent<HTMLSelectElement>): void | undefined;
// }
export type IDropdownPosition = 'top' | 'bottom';

export interface IDropdownProps {
  buttonText?: string;
  children: React.ReactNode;
  icon?: React.ReactElement;
  isOpen: boolean;
  onToggle?: () => void;
  position?: IDropdownPosition;
}
