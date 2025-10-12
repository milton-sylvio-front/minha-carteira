import { forwardRef } from 'react';

import Spinner from '@/components/UI/Spinner';

import type { IButtonProps } from './types';
import { ButtonIcon, Container } from './styles';

export const UiButton = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      borderRadius = 'md',
      children,
      fullWidth,
      icon,
      isLoading = false,
      leftIcon,
      rightIcon,
      size = 'md',
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const ButtonContent = () => (
      <>
        {leftIcon && <ButtonIcon mr={2}>{leftIcon}</ButtonIcon>}
        {children}
        {rightIcon && <ButtonIcon ml={2}>{rightIcon}</ButtonIcon>}
      </>
    );

    return (
      <Container
        borderRadius={borderRadius}
        fullWidth={fullWidth}
        ref={ref}
        size={size}
        variant={variant}
        {...rest}
      >
        {icon && !isLoading}
        {isLoading ? <Spinner /> : <ButtonContent />}
      </Container>
    );
  }
);
