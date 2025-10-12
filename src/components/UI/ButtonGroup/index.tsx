import { Container } from './styles';

import type { IButtonGroupProps } from './types';

export const UiButtonGroup = ({
  children,
  fullWidth = false,
  ...rest
}: IButtonGroupProps) => (
  <Container fullWidth={fullWidth} {...rest}>
    {children}
  </Container>
);
