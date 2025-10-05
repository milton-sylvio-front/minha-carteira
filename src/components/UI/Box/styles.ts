import styled from 'styled-components';
import {
  background,
  border,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
} from 'styled-system';

import type { IBox } from './types';

export const Box = styled('div')<IBox>(
  border,
  background,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space
);
