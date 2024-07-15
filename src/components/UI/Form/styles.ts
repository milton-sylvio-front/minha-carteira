import styled from 'styled-components'
import { rgba, math } from 'polished'

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  > div {
    flex: 1;
  }

  &.form-vertical {
    flex-direction: column;
  }

  &.flex-end {
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media (max-width: ${props => props.theme.general.sizes.small}) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`

export const FormGroup = styled.div`
  padding: ${props => props.theme.general.space[0]}
    ${props => props.theme.general.space[1]};
  margin-bottom: ${props => props.theme.general.space[3]};
`

export const FormErrorMessage = styled.div`
  color: ${props => props.theme.general.colors.danger};
  font-size: ${props => props.theme.general.fontSizes[0]};
  margin-top: ${props => props.theme.general.space[1]};
`

export const FormLabel = styled.label`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.general.space[1]};

  small {
    color: ${props => rgba(props.theme.textColor, 0.7)};
    cursor: pointer;
    font-size: ${props => math(`${props.theme.general.fontSizes[0]} - 2`)};
    text-transform: uppercase;

    &:hover {
      color: ${props => props.theme.general.colors.primary};
    }
  }
`
