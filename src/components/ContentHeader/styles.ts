import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.general.space[8]};
  width: 100%;

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    align-items: flex-start;
    margin-bottom: ${(props) => props.theme.general.space[6]};
    flex-direction: column;
  }
`;

export const TitleHeader = styled.h1`
  @media(max-width: ${(props) => props.theme.general.sizes.medium}) {
    margin-bottom: ${(props) => props.theme.general.space[4]};
    font-size: ${(props) => props.theme.general.fontSizes[4]};
  }

  &::after {
    background-color: ${(props) => props.theme.general.colors.primary};
    content: ''
    display: block;
    height: 5px;
    width: 60px;
  }
`;

export const Controllers = styled.div`
  display: flex;

  .dropdown {
    &:first-child {
      margin-right: ${(props) => props.theme.general.space[3]};
      min-width: 110px;
    }

    @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
      .dropdown {
        &:first-child {
          margin-right: ${(props) => props.theme.general.space[2]};
        }
      }
    }
  }

  &:nth-child(0) {
    margin-right: ${(props) => props.theme.general.space[2]};
  }

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    justify-content: space-between;
    width: 100%;
  }
`;
