import styled from 'styled-components';
import {
  border,
  color,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import { ICloseButton } from './types';

export const CloseButton = styled.button<ICloseButton>`
  ${border}
  ${color}
  ${layout}
  ${position}
  ${space}
  ${typography}

  cursor: pointer;
  outline: transparent solid 2px;
  outline-offset: 2px;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }
`;
