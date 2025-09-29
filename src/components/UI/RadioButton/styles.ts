import styled from 'styled-components';
import { colors, fontSizes, space } from '@/styles/themes/general';

export const Label = styled.label`
  align-items: center;
  border-radius: inherit;
  cursor: pointer;
  display: flex;
  margin: 0 0.125rem;
  padding: ${space[2]} ${space[3]};
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;

  &.sm {
    font-size: ${fontSizes[1]};
    padding: ${space[1]} ${space[2]};
  }

  &.md {
    font-size: ${fontSizes[2]};
  }

  &.lg {
    font-size: ${fontSizes[3]};
  }

  &.active {
    background-color: ${colors.primary};
    color: ${colors.white};

    transition:
      color 0.15s ease-in-out,
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }

  > svg {
    margin-right: ${space[1]};
  }
`;

export const Radio = styled.input`
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
  position: absolute;
`;
