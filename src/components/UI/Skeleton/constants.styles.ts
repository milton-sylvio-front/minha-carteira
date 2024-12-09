import { css } from 'styled-components';

export const SkeletonAnimationPulse = css`
  animation: ${(props) => props.theme.general.animations.pulse};
  animation-duration: 1.2s;
  background: ${(props) => props.theme.general.colors.gray.dark};
`;

export const SkeletonAnimationShine = css`
  animation: bg-position 5s ease-in-out infinite;
  background-image: linear-gradient(
    270deg,
    ${(props) => props.theme.general.colors.gray.dark},
    ${(props) => props.theme.general.colors.gray.light},
    ${(props) => props.theme.general.colors.gray.light},
    ${(props) => props.theme.general.colors.gray.dark}
  );
  background-size: 400% 100%;
`;
