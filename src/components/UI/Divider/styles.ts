import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { space } from '@/styles/themes/general';

import type { IUiDivider } from './types';

const BORDER = {
  horizontal: css`
    border-top: 1px solid ${({ theme }) => rgba(theme.borderColor, 0.5)};
  `,
  vertical: css`
    border-left: 1px solid ${({ theme }) => rgba(theme.borderColor, 0.5)};
  `,
};

export const Container = styled.hr<IUiDivider>`
  border: none;
  height: ${(props) => (props.orientation === 'vertical' ? '100%' : '1px')};
  margin: ${space[1]} ${space[0]};
  width: ${(props) => (props.orientation === 'horizontal' ? '100%' : '1px')};

  ${(props) => props.orientation && BORDER[props.orientation]};
`;
