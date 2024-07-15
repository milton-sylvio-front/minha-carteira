import styled from 'styled-components'

import Card from '../../components/UI/Card/styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  max-width: 350px;

  p {
    font-size: ${(props) => props.theme.general.fontSizes[0]};
    margin-top: ${(props) => props.theme.general.space[3]};
    text-align: center;

    a {
      margin-left: ${(props) => props.theme.general.space[1]};
    }
  }
`

export const ContainerSignin = styled.section`
  flex: 0;
  max-width: 350px;
  width: 100%;
`

export const ContainerForm = styled(Card)`
  display: flex;
  flex: 0;
  flex-direction: column;
  padding: 30px;

  > h1 {
    font-size: ${(props) => props.theme.general.fontSizes[4]};
    margin-bottom: ${(props) => props.theme.general.space[4]};

    &:after {
      content: ''
      background-color: ${(props) => props.theme.general.colors.primary};
      display: block;
      height: 5px;
      width: 50px;
    }
  }
`
