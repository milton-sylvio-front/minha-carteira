import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import type { IButtonProps } from './types';

const COLOR = {
  primary: css`
    background-color: ${(props) => props.theme.general.colors.primary};
    color: ${(props) => props.theme.general.colors.white};

    &:hover {
      background-color: ${(props) =>
        darken(0.05, props.theme.general.colors.primary)};
      box-shadow: 0 0 5px 0.2rem
        ${(props) => rgba(props.theme.general.colors.primary, 0.35)};
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem
        ${(props) => rgba(props.theme.general.colors.primary, 0.5)};
    }
  `,
  secondary: css`
    background-color: ${(props) => props.theme.general.colors.secondary};
    color: ${(props) => props.theme.general.colors.white};
  `,
  outline: css`
    background-color: transparent;
    border-color: ${(props) => props.theme.general.colors.primary};
    color: ${(props) => props.theme.general.colors.primary};

    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.general.colors.primary};
      color: ${(props) => props.theme.general.colors.white};
    }
  `,
};

const FULL_WIDTH = css`
  text-align: center;
  width: 100%;
`;

export const Container = styled.button<IButtonProps>`
  align-items: center;
  border-radius: ${(props) => props.theme.general.bordersRadius.normal};
  border: 1px solid transparent;
  display: flex;
  font-size: ${(props) => props.theme.general.fontSizes[2]};
  font-weight: ${(props) => props.theme.general.fontWeights.normal};
  height: 2.5rem;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: 1.5;
  padding: ${(props) => props.theme.general.space[2]}
    ${(props) => props.theme.general.space[5]};
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
      background-color: ${(props) => props.theme.general.colors.primary};
      box-shadow: none;
    }
  }
`;
