import Spinner from '../Spinner';

import type { IButtonProps } from './types';
import { Container } from './styles';

export const UiButton = ({
  color = 'primary',
  children,
  fullWidth,
  icon,
  isLoading = true,
  ...rest
}: IButtonProps) => (
  <Container color={color} fullWidth={fullWidth} {...rest}>
    {icon && <img src={icon} alt="" />}
    {isLoading ? <Spinner /> : children}
  </Container>
);
