import styled, { keyframes } from 'styled-components';

const animateBullets = keyframes`
  50% {
    transform: scale(0.75);
    opacity: 0.2;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.span`
  align-items: center;
  display: flex;
  font-size: 1em;
  line-height: normal;
  margin-inline-end: 0px;
  position: absolute;
`;

export const Bullet = styled.span`
  animation: 0.7s linear 0s infinite normal both running ${animateBullets};
  background-color: white;
  border-radius: 100%;
  display: inline-block;
  height: 8px;
  margin: 2px;
  width: 8px;

  &.middle {
    animation: 0.7s linear 0.35s infinite normal both running ${animateBullets};
  }
`;
