import styled, { css } from 'styled-components';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import { colors, fontSizes, space as spacing } from '@/styles/themes/general';

import type { IAlertContainer } from './types';

const TYPE = {
  error: css`
    background: ${colors.danger};
  `,
  success: css`
    background: ${colors.success};
  `,
  warning: css`
    background: ${colors.warning};
  `,
  info: css`
    background: ${colors.info};
  `,
};

export const AlertContainer = styled.div<IAlertContainer>`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}

  color: ${colors.white};
  font-size: ${fontSizes[1]};

  svg {
    margin-right: ${spacing[2]};
  }

  ${(props) => props?.type && TYPE[props?.type]}
`;
