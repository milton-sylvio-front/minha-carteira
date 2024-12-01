import { Container } from './styles';

import type { IUiCard } from './types';

export const UiCard = ({ children }: IUiCard) => (
  <Container className="card">{children}</Container>
);
