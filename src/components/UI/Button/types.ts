import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: 'sm' | 'md' | 'lg' | 'full';
  children?: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}
