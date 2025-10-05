import styled from 'styled-components';
import {
  background,
  border,
  flexbox,
  layout,
  position,
  shadow,
  space,
} from 'styled-system';

import type { IMenuStyles } from './types';

export const Container = styled.div<IMenuStyles>(
  border,
  background,
  flexbox,
  layout,
  position,
  shadow,
  space
);
