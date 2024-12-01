import styled from 'styled-components';
import type { ISkeletonCircle } from './types';
import {
  SkeletonAnimationPulse,
  SkeletonAnimationShine,
} from '../constants.styles';

export const SkeletonCircle = styled.div<ISkeletonCircle>`
  background-clip: padding-box;
  border-radius: ${(props) => props.theme.general.bordersRadius.rounded};
  box-shadow: none;
  flex-shrink: 0;
  pointer-events: none;
  user-select: none;
  height: ${(props) => props.size};
  width: ${(props) => props.size};

  ${(props) =>
    props.variant === 'pulse'
      ? SkeletonAnimationPulse
      : SkeletonAnimationShine};
`;
