import styled from 'styled-components';
import { rgba } from 'polished';
import { layout } from 'styled-system';

import {
  bordersRadius,
  colors,
  fontSizes,
  space,
} from '@/styles/themes/general';

import type { IInputStylesProps } from './types';

export const Container = styled.div<IInputStylesProps>`
  ${layout};

  align-items: center;
  display: flex;
  margin: ${space[0]} ${space[0]} ${space[0]};
  position: relative;
  width: 100%;

  svg {
    font-size: ${fontSizes[2]};
    left: ${space[3]};
    opacity: 0.25;
    position: absolute;
  }

  > input {
    background-color: ${({ theme }) => theme.input.bg};
    border-radius: ${bordersRadius.normal};
    border: 1px solid ${({ theme }) => theme.input.borderColor};
    color: ${({ theme }) => theme.input.color};
    display: inline-flex;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    width: 100%;

    &.input-sm {
      font-size: ${fontSizes[0]};
      padding: ${space[2]} ${space[2]};
      height: 30px;
      ${({ showIcon }) => showIcon && `padding-left: ${space[8]};`};
    }

    &.input-md {
      font-size: ${fontSizes[1]};
      padding: ${space[3]} ${space[3]};
      height: 40px;
      ${({ showIcon }) => showIcon && `padding-left: ${space[9]};`};
    }

    &.input-lg {
      font-size: ${fontSizes[3]};
      padding: ${space[4]} ${space[4]};
      height: 50px;
      ${({ showIcon }) => showIcon && `padding-left: ${space[10]};`};
    }

    ::-webkit-datetime-edit {
      color: ${({ theme }) => theme.input.color};
    }

    &[type='date']::-webkit-calendar-picker-indicator {
      filter: invert(${({ theme }) => (theme.mode === 'dark' ? 1 : '50%')});
    }

    &:-webkit-autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: 0 0 0 40px ${({ theme }) => theme.input.bg} inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.input.color};
      }
    }

    &:focus {
      border-color: ${colors.primary};
      box-shadow: 0 0 0 0.2rem ${rgba(colors.primary, 0.25)};
      color: ${({ theme }) => theme.input.color};
      outline: 0;
    }

    &.error {
      border-color: ${colors.danger};
      color: ${colors.danger};
    }
  }
`;
