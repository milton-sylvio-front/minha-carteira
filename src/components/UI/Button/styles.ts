import styled from 'styled-components';
import { darken, rgba } from 'polished';

export const Container = styled.button`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  align-items: center;
  background-color: ${(props) => props.theme.general.colors.primary};
  border-radius: ${(props) => props.theme.general.bordersRadius.normal};
  border: 1px solid transparent;
  color: ${(props) => props.theme.general.colors.white};
  display: flex;
  font-size: ${(props) => props.theme.general.fontSizes[2]};
  font-weight: ${(props) => props.theme.general.fontWeights.normal};
  height: 2.5rem;
  justify-content: center;
  line-height: 1.5;
  padding: ${(props) => props.theme.general.space[2]}
    ${(props) => props.theme.general.space[5]};
  text-align: center;
  transition: all 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;

  &:hover {
    background-color: ${(props) =>
      darken(0.05, props.theme.general.colors.primary)};
    box-shadow: 0 0 5px 0.2rem
      ${(props) => rgba(props.theme.general.colors.primary, 0.35)};
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem
      ${(props) => rgba(props.theme.general.colors.primary, 0.5)};
  }

  &.block {
    text-align: center;
    width: 100%;
  }

  &.outline {
    background-color: transparent;
    border-color: ${(props) => props.theme.general.colors.primary};
    color: ${(props) => props.theme.general.colors.primary};

    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.general.colors.primary};
      color: ${(props) => props.theme.general.colors.white};
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;

    &:hover {
      background-color: ${(props) => props.theme.general.colors.primary};
      box-shadow: none;
    }
  }
`;
