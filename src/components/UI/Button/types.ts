import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: string;
  isLoading?: boolean;
}
