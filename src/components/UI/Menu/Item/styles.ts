import styled from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';
import { darken } from 'polished';

import type { IMenuItemStyles } from './types';
import { space as spacing } from '@/styles/themes/general';

export const Container = styled.a<IMenuItemStyles>`
  color: ${(props) => props.theme.textColor};
  padding: ${spacing[4]} ${spacing[3]};
  text-decoration: none !important;
  transition: background-color 0.35s ease-in-out;
  ${flexbox};
  ${layout};
  ${position};
  ${space};

  > svg {
    color: ${(props) => props.theme.textColor};
    margin-inline-end: ${spacing[2]};
  }

  &:hover {
    background-color: ${(props) => darken(0.05, props.theme.backoundColor)};
  }
`;
