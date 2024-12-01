import styled from 'styled-components';
import type { ISkeletonText } from './types';
import {
  SkeletonAnimationPulse,
  SkeletonAnimationShine,
} from '../constants.styles';

export const SkeletonText = styled.div<ISkeletonText>`
  background-clip: padding-box;
  border-radius: ${(props) => props.theme.general.bordersRadius.normal};
  box-shadow: none;
  flex-shrink: 0;
  height: ${(props) => props.height};
  pointer-events: none;
  user-select: none;
  width: ${(props) => props.width};

  ${(props) =>
    props.variant === 'pulse'
      ? SkeletonAnimationPulse
      : SkeletonAnimationShine};
`;
