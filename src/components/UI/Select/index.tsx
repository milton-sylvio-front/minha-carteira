import { Container } from './styles';
import type { ISelect } from './types';

export const UiSelect = ({ required, children, ...rest }: ISelect) => (
  <Container required={required} {...rest}>
    {children}
  </Container>
);
