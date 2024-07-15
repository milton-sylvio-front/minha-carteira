import styled, { keyframes } from 'styled-components';
import Card from '../../../components/UI/Card/styles';

const animate = keyframes`
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
  animation: ${animate} 0.5s;
  height: 260px;
  width: 48%;

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    height: 200px;
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 38%;
`;

export const SideRight = styled.aside`
  flex: 1;
  justify-content: center;
  width: 58%;
`;

export const LegendContainer = styled.ul`
  list-style: none;
`;

export const Legend = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 10px;

  > div {
    align-items: center;
    border-radius: ${(props) => props.theme.general.bordersRadius.normal};
    color: ${(props) => props.theme.general.colors.white};
    display: flex;
    font-size: ${(props) => props.theme.general.fontSizes[0]};
    font-weight: ${(props) => props.theme.general.fontWeights.bold};
    height: 45px;
    justify-content: center;
    margin-right: 10px;
    width: 45px;

    &.entry {
      background-color: ${(props) => props.theme.general.colors.success};
    }
    &.output {
      background-color: ${(props) => props.theme.general.colors.primary};
    }

    @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
      height: 35px;
      width: 35px;
    }

    @media (max-width: ${(props) => props.theme.general.sizes.small}) {
      height: 28px;
      width: 28px;
    }
  }

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    font-size: ${(props) => props.theme.general.fontSizes[1]};
  }
`;
