import styled, { css } from 'styled-components';
import { rgba } from 'polished';

interface IContainer {
  showIcon: boolean;
}

export const Container = styled.div<IContainer>`
  align-items: center;
  display: flex;
  height: 40px;
  margin: ${(props) => props.theme.general.space[0]}
    ${(props) => props.theme.general.space[0]}
    ${(props) => props.theme.general.space[0]};
  position: relative;
  width: 100%;

  svg {
    font-size: ${(props) => props.theme.general.fontSizes[2]};
    left: ${(props) => props.theme.general.space[3]};
    opacity: 0.25;
    position: absolute;
  }

  > input {
    background-color: ${(props) => props.theme.input.bg};
    border-radius: ${(props) => props.theme.general.bordersRadius.normal};
    border: 1px solid ${(props) => props.theme.input.borderColor};
    color: ${(props) => props.theme.input.color};
    display: inline-block;
    font-size: ${(props) => props.theme.general.fontSizes[1]};
    height: 40px;
    padding-left: ${(props) => props.theme.general.space[1]};
    padding-right: ${(props) => props.theme.general.space[1]};
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    width: 100%;

    ${(props) =>
      props.showIcon &&
      css`
        padding-left: ${(props) => props.theme.general.space[9]};
      `};

    ::-webkit-datetime-edit {
      color: ${(props) => props.theme.input.color};
    }

    ::-webkit-calendar-picker-indicator {
      filter: invert(50%);

      ${(props) =>
        props.theme.mode === 'dark' &&
        css`
          filter: invert(1);
        `};
    }
    &:-webkit-autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: 0 0 0 40px ${(props) => props.theme.input.bg} inset !important;
        -webkit-text-fill-color: ${(props) => props.theme.input.color};
      }
    }

    &:focus {
      border-color: ${(props) => props.theme.general.colors.primary};
      box-shadow: 0 0 0 0.2rem
        ${(props) => rgba(props.theme.general.colors.primary, 0.25)};
      color: ${(props) => props.theme.input.color};
      outline: 0;
    }

    &.error {
      border-color: ${(props) => props.theme.general.colors.danger};
      color: ${(props) => props.theme.general.colors.danger};
    }
  }
`;
