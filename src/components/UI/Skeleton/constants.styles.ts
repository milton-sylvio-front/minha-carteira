import { keyframes, css } from 'styled-components';

const pulseAnimation = keyframes`
  50% {
    opacity: 0.5;
  }
`;

const shineAnimation = keyframes`
  0% {
    background-position: 24px 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const SkeletonAnimationPulse = css`
  animation: ${(props) => props.theme.general.animations.pulse};
  animation-duration: 1.2s;
  animation-name: ${pulseAnimation};
  background: ${(props) => props.theme.general.colors.gray[2]};
`;

export const SkeletonAnimationShine = css`
  animation: ${shineAnimation} 5s ease-in-out infinite;
  background-image: linear-gradient(
    270deg,
    ${(props) => props.theme.general.colors.gray[0]},
    ${(props) => props.theme.general.colors.gray[2]},
    ${(props) => props.theme.general.colors.gray[2]},
    ${(props) => props.theme.general.colors.gray[0]}
  );
  background-size: 400% 100%;
`;
