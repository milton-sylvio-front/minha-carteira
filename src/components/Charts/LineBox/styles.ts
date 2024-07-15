import styled, { keyframes } from 'styled-components';
import Card from '../../../components/UI/Card/styles';

const animate = keyframes`
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

export const Container = styled(Card)`
  align-content: space-between;
  animation: ${animate} 0.5s;
  height: 350px;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    height: 100%;
    min-height: 250px;
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.general.space[6]};

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    flex-direction: column;

    h2 {
      margin-bottom: ${(props) => props.theme.general.space[3]};
    }
  }
`;

export const Legends = styled.ul`
  list-style: none;
`;

export const LegendItem = styled.li`
  display: inline;
  position: relative;

  &:last-child {
    margin-left: ${(props) => props.theme.general.space[4]};
  }

  &:before {
    background-color: #fff;
    border-radius: 12px;
    content: ''
    display: inline-block;
    margin-right: 8px;
    height: 12px;
    width: 12px;
  }

  &.entry:before  {
    background-color: ${(props) => props.theme.general.colors.primary};
  }
  &.output:before  {
    background-color: ${(props) => props.theme.general.colors.success};
  }

  @media(max-width: ${(props) => props.theme.general.sizes.medium}) {}
`;
