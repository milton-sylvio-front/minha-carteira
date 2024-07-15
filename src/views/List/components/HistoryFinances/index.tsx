import { Container } from './styles';
import type { IHistoryFinances } from './types';

export const HistoryFinances = ({
  borderColor,
  title,
  subtitle,
  amount,
}: IHistoryFinances) => (
  <Container borderColor={borderColor}>
    <div>
      <span>{title}</span>
      <small>{subtitle}</small>
    </div>
    <h3>{amount}</h3>
  </Container>
);
