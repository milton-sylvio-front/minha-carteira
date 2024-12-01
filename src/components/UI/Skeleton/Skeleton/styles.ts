import styled from 'styled-components';
import type { ISkeleton } from './types';

import {
  SkeletonAnimationPulse,
  SkeletonAnimationShine,
} from '../constants.styles';

export const Skeleton = styled.div<ISkeleton>`
  background-clip: padding-box;
  border-radius: ${(props) => props.theme.general.bordersRadius.normal};
  box-shadow: none;
  flex-shrink: 0;
  pointer-events: none;
  user-select: none;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  ${(props) =>
    props.variant === 'pulse'
      ? SkeletonAnimationPulse
      : SkeletonAnimationShine};
`;
