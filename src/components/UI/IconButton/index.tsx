import { cloneElement, isValidElement } from 'react';

import { Container } from './styles';

import type { IIconButtonProps } from './types';

export const UiIconButton = ({
  icon,
  children,
  isRound,
  'aria-label': ariaLabel,
  ...rest
}: IIconButtonProps) => {
  const element = icon || children;
  const _children = isValidElement(element)
    ? cloneElement(element as React.ReactElement, {
        'aria-hidden': true,
        focusable: false,
      })
    : null;

  return (
    <Container
      aria-label={ariaLabel}
      borderRadius={isRound ? 'full' : undefined}
      type="button"
      variant="ghost"
      {...rest}
    >
      {_children}
    </Container>
  );
};
