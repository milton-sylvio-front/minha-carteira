import type { IUiMenu } from './types';
import { Container } from './styles';

export const UiMenu = ({ children, ...rest }: IUiMenu) => (
  <Container {...rest}>{children}</Container>
);
