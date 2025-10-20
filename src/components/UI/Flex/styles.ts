import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';
import type { IFlex } from './types';

export const Container = styled.div<IFlex>`
  ${flexbox};
  ${layout};
  ${space};
`;
