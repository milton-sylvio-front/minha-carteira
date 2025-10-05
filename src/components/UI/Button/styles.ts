import styled, { css } from 'styled-components';
import { space as spacement } from 'styled-system';
import { darken, rgba } from 'polished';

import {
  bordersRadius,
  colors,
  fontSizes,
  fontWeights,
  space,
} from '@/styles/themes/general';

import type { IButtonProps, IButtonIcon } from './types';

const VARIANT = {
  primary: css`
    background-color: ${colors.primary};
    color: ${colors.white};

    &:hover {
      background-color: ${darken(0.05, colors.primary)};
      box-shadow: 0 0 5px 0.2rem ${rgba(colors.primary, 0.35)};
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${rgba(colors.primary, 0.5)};
    }
  `,
  secondary: css`
    background-color: ${colors.secondary};
    color: ${colors.white};
  `,
  outline: css`
    background-color: transparent;
    border-color: ${colors.primary};
    color: ${colors.primary};

    &:hover,
    &:focus {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.textColor};

    &:hover,
    &:focus {
      color: ${({ theme }) => rgba(theme.textColor, 0.5)};
    }
  `,
};

const BORDER_RADIUS = {
  sm: bordersRadius.small,
  md: bordersRadius.normal,
  lg: bordersRadius.large,
  full: bordersRadius.rounded,
};

const FULL_WIDTH = css`
  text-align: center;
  width: 100%;
`;

export const Container = styled.button<IButtonProps>`
  align-items: center;
  border-radius: ${bordersRadius.normal};
  border: 1px solid transparent;
  display: flex;
  font-size: ${fontSizes[2]};
  font-weight: ${fontWeights.normal};
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: 1.5;
  padding: ${space[2]} ${space[5]};
  text-align: center;
  transition: all 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;

  ${({ variant }) => variant && VARIANT[variant]};
  ${({ fullWidth }) => fullWidth && FULL_WIDTH}
  ${({ borderRadius }) =>
    borderRadius && `border-radius: ${BORDER_RADIUS[borderRadius]}`};

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;

    &:hover {
      background-color: ${colors.primary};
      box-shadow: none;
    }
  }
`;

export const ButtonIcon = styled.span<IButtonIcon>`
  ${spacement};
  align-items: center;
  display: flex;
`;
