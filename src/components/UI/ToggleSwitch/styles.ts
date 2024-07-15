import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 20px;
`

export const ToggleSwitchLabel = styled.span`
  font-size: ${props => props.theme.general.fontSizes[1]};

  @media (max-width: ${props => props.theme.general.sizes.small}) {
    font-size: ${props => props.theme.general.fontSizes[0]};
  }
`

export const ToggleSwitchContainer = styled.label`
  display: inline-block;
  height: 14px;
  margin: 0 10px;
  position: relative;
  width: 40px;

  > input {
    height: 0;
    opacity: 0;
    width: 0;
  }
`

export const ToggleSwitchSpan = styled.span`
  background-color: ${props => props.theme.general.colors.primary};
  border-radius: 20px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  &:before {
    background-color: ${props => props.theme.general.colors.white};
    border-radius: ${props => props.theme.general.bordersRadius.rounded};
    bottom: -3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
    content: '';
    height: 20px;
    left: 2px;
    position: absolute;
    transition: 0.4s;
    width: 20px;
  }
`

export const ToggleSwitchInput = styled.input`
  &:checked + .switch-slider {
    background-color: ${props => props.theme.general.colors.secondary};

    &:before {
      transform: translateX(20px);
    }
  }
`
