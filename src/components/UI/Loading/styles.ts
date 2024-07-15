import styled, { keyframes } from 'styled-components'
import { darken } from 'polished'

const text = keyframes`
  0% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }

  40% {
    letter-spacing: 2px;
    transform: translateX(26px);
  }

  80% {
    letter-spacing: 1px;
    transform: translateX(32px);
  }

  90% {
    letter-spacing: 2px;
    transform: translateX(0px);
  }

  100% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
`

const loading = keyframes`
  0% {
    transform: translateX(0px);
    width: 16px;
  }

  40% {
    transform: translateX(0px);
    width: 100%;
  }

  80% {
    transform: translateX(64px);
    width: 16px;
  }

  90% {
    transform: translateX(0px);
  }
    width: 100%;

  100% {
    transform: translateX(0px);
    width: 16px;
  }
`

const loadingBefore = keyframes`
  0% {
    transform: translateX(0px);
    width: 16px;
  }

  40% {
    transform: translateX(0%);
    width: 80%;
  }

  80% {
    transform: translateX(0px);
    width: 100%;
  }

  90% {
    transform: translateX(15px);
    width: 80%;
  }
  100% {
    transform: translateX(0px);
    width: 16px;
  }
`

export const Container = styled.main`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`

export const Content = styled.div`
  height: 50px;
  position: relative;
  width: 80px;
`

export const Title = styled.p`
  animation: ${text} 3.5s ease both infinite;
  color: ${props => props.theme.general.colors.secondary};
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  top: 0;
`

export const BarLoading = styled.span`
  animation: ${loading} 3.5s ease both infinite;
  background-color: ${props => props.theme.general.colors.secondary};
  border-radius: 50px;
  bottom: 0;
  display: block;
  height: 16px;
  position: absolute;
  transform: translateX(64px);
  width: 16px;

  &:before {
    animation: ${loadingBefore} 3.5s ease both infinite;
    background-color: ${props =>
      darken(0.15, props.theme.general.colors.secondary)};
    border-radius: inherit;
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
`
