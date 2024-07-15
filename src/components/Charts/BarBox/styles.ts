import styled, { keyframes } from 'styled-components';
import Card from '../../../components/UI/Card/styles';

const animateLeft = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const animateRight = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled(Card)`
  animation: ${animateLeft} 0.5s ease-in;
  height: 220px;
  justify-content: space-between;
  width: 48%;

  &:last-child {
    animation: ${animateRight} 0.5s;
  }

  aside {
    display: flex;
    width: 48%;
  }

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  align-content: space-between;
  flex-direction: column;

  > * {
    flex: 1;
  }
`;

export const SideRight = styled.aside`
  align-items: flex-end;
  flex: 1;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    justify-content: baseline;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
`;

export const Legend = styled.li`
  align-items: center;
  display: flex;
  font-size: ${(props) => props.theme.general.fontSizes[2]};
  margin-bottom: ${(props) => props.theme.general.space[3]};

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    font-size: ${(props) => props.theme.general.fontSizes[0]};
  }

  > div {
    align-items: center;
    border-radius: ${(props) => props.theme.general.bordersRadius.normal};
    color: ${(props) => props.theme.general.colors.white};
    font-weight: ${(props) => props.theme.general.fontWeights.bold};
    font-size: 12px;
    display: flex;
    height: 45px;
    justify-content: center;
    margin-right: 10px;
    width: 45px;

    &.recurrent {
      background-color: ${(props) => props.theme.general.colors.danger};
    }
    &.eventual {
      background-color: ${(props) => props.theme.general.colors.warning};
    }
  }
`;
