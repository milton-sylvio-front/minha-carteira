import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.select`
  background-color: ${(props) => props.theme.input.bg};
  border: 1px solid ${(props) => props.theme.input.borderColor};
  border-radius: ${(props) => props.theme.general.bordersRadius.normal};
  color: ${(props) => props.theme.textColor};
  height: ${(props) => props.theme.general.space[9]};
  padding: ${(props) => props.theme.general.space[1]}
    ${(props) => props.theme.general.space[2]};
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme.general.colors.primary};
    box-shadow: 0 0 0 0.2rem
      ${(props) => rgba(props.theme.general.colors.primary, 0.25)};
  }

  &.error {
    border-color: ${(props) => props.theme.general.colors.danger};
    color: ${(props) => props.theme.general.colors.danger};
  }
`;
