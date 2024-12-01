import styled from 'styled-components';
import type { IVStack } from './types';

export const VStack = styled.div<IVStack>`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;
