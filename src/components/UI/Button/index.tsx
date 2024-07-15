import Spinner from '../Spinner';

import { Container } from './styles';
import { IButtonProps } from './types';

export const UiButton = ({
  icon,
  isLoading = true,
  children,
  ...rest
}: IButtonProps) => (
  <Container {...rest}>
    {icon && <img src={icon} alt="" />}
    {isLoading ? <Spinner /> : children}
  </Container>
);
