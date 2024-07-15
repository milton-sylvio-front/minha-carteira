import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled(Container)`
  list-style: none;
`

export const Filters = styled(Container)`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  width: 100%;

  .tag-filter {
    background: none;
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
    font-weight: 700;
    margin: 0 10px;
    opacity: 0.7;
    transition: all 0.3s;

    &:after {
      background-color: ${(props) => props.theme.general.colors.white};
      content: '';
      display: block;
      height: 5px;
      transition: width 0.3s;
      width: 50%;
    }

    &.tag-filter-recurrent:after {
      background-color: ${(props) => props.theme.general.colors.danger};
    }

    &.tag-filter-eventual:after {
      background-color: ${(props) => props.theme.general.colors.warning};
    }

    &:hover {
      opacity: 0.5;

      &:after {
        width: 100%;
      }
    }

    &.tag-filter-active {
      opacity: 1;

      &:after {
        width: 100%;
      }
    }
  }
`
