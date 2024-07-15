import styled, { keyframes } from 'styled-components'

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.general.sizes.medium}) {
    justify-content: center;
  }
`

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
`

export const ContainerColorsCards = styled.div`
  align-items: center;
  animation: ${animate} 0.5s;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;

  @media (max-width: ${props => props.theme.general.sizes.medium}) {
    align-items: flex-stretch;
    flex-direction: column;
  }
`
