import Spinner from '../Spinner';

import type { IButtonProps } from './types';
import { Container } from './styles';

export const UiButton = ({
  borderRadius = 'md',
  children,
  fullWidth,
  icon,
  isLoading = false,
  variant = 'primary',
  ...rest
}: IButtonProps) => (
  <Container
    borderRadius={borderRadius}
    fullWidth={fullWidth}
    variant={variant}
    {...rest}
  >
    {icon}
    {isLoading ? <Spinner /> : children}
  </Container>
);
