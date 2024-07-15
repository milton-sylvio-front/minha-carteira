import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;

  > img {
    height: 32px;
  }

  > span {
    font-size: ${(props) => props.theme.general.fontSizes[2]};
    margin-left: 10px;

    &.hidden {
      display: none;
    }
  }
`;
