import styled from 'styled-components';
import { rgba } from 'polished';

import { bordersRadius, colors, space } from '@/styles/themes/general';

export const Container = styled.select`
  background-color: ${({ theme }) => theme.input.bg};
  border: 1px solid ${({ theme }) => theme.input.borderColor};
  border-radius: ${bordersRadius.normal};
  color: ${({ theme }) => theme.textColor};
  height: ${space[9]};
  padding: ${space[0]} ${space[2]};
  width: 100%;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 0.2rem ${rgba(colors.primary, 0.25)};
  }
`;
