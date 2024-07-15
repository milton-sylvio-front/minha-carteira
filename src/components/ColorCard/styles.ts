import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  align-items: flex-start;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px
    ${(props) => rgba(props.theme.general.colors.black, 0.06)};
  color: ${(props) => props.theme.general.colors.white};
  display: flex;
  flex-direction: column;
  height: 160px;
  overflow: hidden;
  padding: 1.25rem;
  position: relative;
  width: 100%;

  &.balance {
    background-color: ${(props) => props.theme.general.colors.danger};
  }
  &.entry {
    background-color: ${(props) => props.theme.general.colors.success};
  }
  &.output {
    background-color: ${(props) => props.theme.general.colors.primary};
  }

  &:nth-child(2) {
    margin-left: 30px;
    margin-right: 30px;
  }

  > span {
    font-weight: 700;
    font-size: ${(props) => props.theme.general.fontSizes[3]};
  }

  > strong {
    font-size: ${(props) => props.theme.general.fontSizes[5]};
  }

  > small {
    bottom: 20px;
    font-size: 11px;
    position: absolute;
  }

  > img {
    height: 110%;
    opacity: 0.4;
    position: absolute;
    right: -30px;
    top: -15px;
  }

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    margin-bottom: ${(props) => props.theme.general.space[3]};
  }
`;
