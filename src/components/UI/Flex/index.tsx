import { Container } from './styles'; // Assuming Flex.js is in the same directory
import type { IFlex } from './types';

export const UiFlex = ({ children, ...rest }: IFlex) => (
  <Container display="flex" {...rest}>
    {children}
  </Container>
);
