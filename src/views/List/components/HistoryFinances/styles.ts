import styled, { keyframes } from 'styled-components'
import Card from '../../../../components/UI/Card/styles'
import { IContainerProps } from './types'

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
`

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
`

export const Container = styled(Card)<IContainerProps>`
  align-items: center;
  animation: ${animateLeft} 0.5s ease-in;
  border-left: 8px solid ${(props) => props.borderColor};
  cursor: pointer;
  justify-content: space-between;
  margin: 0 0 10px;
  padding: 10px 15px;
  transition: all 0.3s;

  &:nth-child(even) {
    animation: ${animateRight} 0.5s ease-in;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span {
      font-weight: 700;
    }
  }

  &:hover {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    transform: translateX(10px);
  }
`
