import styled from 'styled-components';

import { bordersRadius } from '@/styles/themes/general';

import type { ISkeleton } from './types';

import {
  SkeletonAnimationPulse,
  SkeletonAnimationShine,
} from '../constants.styles';

export const Skeleton = styled.div<ISkeleton>`
  background-clip: padding-box;
  border-radius: ${bordersRadius.normal};
  box-shadow: none;
  flex-shrink: 0;
  height: ${({ height }) => height};
  pointer-events: none;
  user-select: none;
  width: ${({ width }) => width};
  ${({ variant }) =>
    variant === 'pulse' ? SkeletonAnimationPulse : SkeletonAnimationShine};
`;
