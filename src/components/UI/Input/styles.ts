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
  height: 40px;
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
    display: inline-block;
    font-size: ${fontSizes[1]};
    height: 40px;
    padding-left: ${space[1]};
    padding-right: ${space[1]};
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    width: 100%;

    ${({ showIcon }) => showIcon && `padding-left: ${space[9]};`};

    ::-webkit-datetime-edit {
      color: ${({ theme }) => theme.input.color};
    }

    ::-webkit-calendar-picker-indicator {
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
