import { css } from 'styled-components';

import { animations } from '@/styles/themes/general';

export const SkeletonAnimationPulse = css`
  animation: ${animations.pulse};
  animation-duration: 1.2s;
  background: ${({ theme }) => theme.backoundColorDark};
`;

export const SkeletonAnimationShine = css`
  animation: bg-position 5s ease-in-out infinite;
  background-image: linear-gradient(
    270deg,
    ${({ theme }) => theme.backoundColorDark},
    ${({ theme }) => theme.backoundColorLight},
    ${({ theme }) => theme.backoundColorLight},
    ${({ theme }) => theme.backoundColorDark}
  );
  background-size: 400% 100%;
`;
