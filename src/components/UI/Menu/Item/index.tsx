import type { IUiMenuItem } from './types';
import { Container } from './styles';

export const UiMenuItem = ({ children, icon, ...rest }: IUiMenuItem) => (
  <Container display="inline-flex" alignItems="center" {...rest}>
    {icon}
    {children}
  </Container>
);
