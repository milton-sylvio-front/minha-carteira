import { Container } from './styles';

import { IUiCard } from './types';

export const UiCard = ({ children }: IUiCard) => (
  <Container className="card">{children}</Container>
);
