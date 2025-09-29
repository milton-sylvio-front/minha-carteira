import type { IUiDivider } from './types';
import { Container } from './styles';

export const UiDivider = ({ orientation = 'horizontal' }: IUiDivider) => (
  <Container orientation={orientation} />
);
