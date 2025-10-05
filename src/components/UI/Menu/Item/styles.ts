import styled from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';
import { darken } from 'polished';

import type { IUiMenuItem, IIMenuListSize } from './types';
import { fontSizes, space as spacing } from '@/styles/themes/general';

export const Container = styled.a<IUiMenuItem>`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none !important;
  transition: background-color 0.35s ease-in-out;
  padding: ${({ size }) => {
    const setSize = {
      sm: `${spacing[2]} ${spacing[2]}`,
      md: `${spacing[4]} ${spacing[3]}`,
      lg: `${spacing[5]} ${spacing[4]}`,
    };

    return setSize[size as IIMenuListSize] ?? setSize.md;
  }};

  font-size: ${({ size }) => {
    const setSize = {
      sm: `${fontSizes[1]}`,
      md: `${fontSizes[2]}`,
      lg: `${fontSizes[3]}`,
    };

    return setSize[size as IIMenuListSize] ?? setSize.md;
  }};

  ${flexbox};
  ${layout};
  ${position};
  ${space};

  > svg {
    color: ${({ theme }) => theme.textColor};
    margin-inline-end: ${spacing[2]};
  }

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.backoundColor)};
  }
`;
