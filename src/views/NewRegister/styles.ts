import styled from 'styled-components'

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  select {
    margin-left: 0;
  }

  @media (max-width: ${props => props.theme.general.sizes.small}) {
    button {
      width: 100%;
    }
  }
`
