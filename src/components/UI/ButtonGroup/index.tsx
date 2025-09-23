import { Container } from './styles';

import type { ButtonGroupProps } from './types';

export const UiButtonGroup = ({ children, className }: ButtonGroupProps) => (
  <Container className={className}>{children}</Container>
);
