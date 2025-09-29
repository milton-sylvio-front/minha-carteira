import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';

import {
  bordersRadius,
  colors,
  fontSizes,
  fontWeights,
  space,
} from '@/styles/themes/general';

import type { IButtonProps } from './types';

const COLOR = {
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
    color: ${(props) => props.theme.textColor};

    &:hover,
    &:focus {
      color: ${(props) => rgba(props.theme.textColor, 0.1)};
    }
  `,
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
  height: 2.5rem;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: 1.5;
  padding: ${space[2]} ${space[5]};
  text-align: center;
  transition: all 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;

  ${(props) => props.color && COLOR[props.color]};
  ${(props) => props.fullWidth && FULL_WIDTH}

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;

    &:hover {
      background-color: ${colors.primary};
      box-shadow: none;
    }
  }
`;
