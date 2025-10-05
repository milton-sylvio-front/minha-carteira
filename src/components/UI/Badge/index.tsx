import type { IUiBadgeProps } from './types';
import { Container } from './styles';

export const UiBadge = ({
  children,
  colorType = 'primary',
  rounded,
  size = 'md',
  variantion = 'solid',
}: IUiBadgeProps) => (
  <Container
    colorType={colorType}
    variantion={variantion}
    rounded={rounded}
    size={size}
  >
    {children}
  </Container>
);
