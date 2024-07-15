import styled, { keyframes } from 'styled-components'

import Card from '../UI/Card/styles'

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
`

export const Container = styled(Card)`
  animation: ${animate} 0.5s;
  flex-direction: column;
  height: 260px;
  width: 48%;

  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 18px;
    font-weight: normal;
  }

  img {
    width: 35px;
    margin-left: 15px;
  }

  footer {
    position: absolute;
    bottom: 30px;
  }

  @media (max-width: ${props => props.theme.general.sizes.medium}) {
    height: 200px;
    width: 100%;
  }
`
