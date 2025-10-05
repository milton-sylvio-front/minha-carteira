import styled from 'styled-components';
import { darken } from 'polished';

import {
  bordersRadius,
  fontSizes,
  fontWeights,
  space,
} from '@/styles/themes/general';

export const Actions = styled.div`
  display: flex;
  gap: ${space[3]};
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: ${space[0]} ${space[2]};
  width: 100%;

  tr:hover td {
    background-color: ${({ theme }) => darken(0.05, theme.backoundColorLight)};
  }
`;

export const Th = styled.th`
  color: ${({ theme }) => theme.textColor};
  font-size: ${fontSizes[0]};
  padding: ${space[2]} ${space[3]};
  text-align: left;
`;

export const Td = styled.td`
  background-color: ${({ theme }) => theme.backoundColorLight};
  color: ${({ theme }) => theme.textColor};
  padding: ${space[3]};
  vertical-align: middle;

  &:first-child {
    border-top-left-radius: ${bordersRadius.large};
    border-bottom-left-radius: ${bordersRadius.large};
    font-weight: ${fontWeights.bold};
  }

  &:last-child {
    border-top-right-radius: ${bordersRadius.large};
    border-bottom-right-radius: ${bordersRadius.large};
  }
`;
