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

import type { IAlertContainer } from './types';

const TYPE = {
  error: css`
    background: ${(props) => props.theme.general.colors.danger};
  `,
  success: css`
    background: ${(props) => props.theme.general.colors.success};
  `,
  warning: css`
    background: ${(props) => props.theme.general.colors.warning};
  `,
  info: css`
    background: ${(props) => props.theme.general.colors.info};
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

  color: ${(props) => props.theme.general.colors.white};
  font-size: ${(props) => props.theme.general.fontSizes[1]};

  svg {
    margin-right: ${(props) => props.theme.general.space[2]};
  }

  ${(props) => props?.type && TYPE[props?.type]}
`;
