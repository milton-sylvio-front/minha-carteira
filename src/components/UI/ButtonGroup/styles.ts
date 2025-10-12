import styled from 'styled-components';
import { colors } from '@/styles/themes/general';

import type { IButtonGroupProps } from './types';

export const Container = styled.div<IButtonGroupProps>`
  display: inline-flex;
  justify-content: space-evenly;
  gap: 0;

  ${({ fullWidth }) => fullWidth && `width: 100%;`}

  &.btn-group-toggle {
    border-radius: 0.25rem;
    border: 1px solid rgba(160, 175, 185, 0.15);
    display: inline-flex;
    padding: 0.25rem 0.125rem;
  }

  & > button {
    border-radius: 0;
    border-right: 1px solid ${colors.gray.light};
    margin: 0;

    &:first-child {
      /* border-top-right-radius: 0;
      border-bottom-right-radius: 0; */
    }

    &:last-child {
      /* border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: none; */
    }
  }
`;
