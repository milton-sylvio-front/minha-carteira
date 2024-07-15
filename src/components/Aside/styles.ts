import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import { Link } from 'react-router-dom';

import { UiToggleSwitch } from '../../components/UI';

interface IContainerProps {
  menuIsOpen: boolean;
}

export const Container = styled.aside<IContainerProps>`
  background-color: ${(props) => darken(0.025, props.theme.aside)};
  box-shadow: 0 5px 10px
    ${(props) => rgba(props.theme.general.colors.black, 0.05)};
  display: flex;
  flex-direction: column;
  grid-area: AS;

  @media (max-width: ${(props) => props.theme.general.sizes.small}) {
    align-items: center;
    height: 100%;
    justify-content: space-between;
    position: fixed;
    top: 70px;
    transform: translate3d(-200px, 0, 0);
    transform: translateX(-200px);
    transition: 300ms ease all;
    visibility: ${(props) => (props.menuIsOpen ? 'visible' : 'hidden')};
    width: 200px;
    z-index: 4;

    ${(props) =>
      props.menuIsOpen &&
      css`
        transform: translate3d(0, 0, 0);
        transform: translateX(0);
      `};
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  padding: ${(props) => props.theme.general.space[7]}
    ${(props) => props.theme.general.space[4]};
  height: 70px;

  @media (max-width: ${(props) => props.theme.general.sizes.small}) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.general.space[8]};
  padding-left: 20px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.general.sizes.small}) {
    margin-top: ${(props) => props.theme.general.space[5]};
  }
`;

export const MenuTitle = styled.span`
  color: ${(props) => rgba(props.theme.textColor, 0.7)};
  font-size: ${(props) => props.theme.general.fontSizes[0]};
  margin-bottom: ${(props) => props.theme.general.space[3]};
  text-transform: uppercase;
`;

export const MenuItem = styled(Link)`
  align-items: center;
  border-radius: ${(props) => props.theme.general.bordersRadius.normal};
  color: ${(props) => rgba(props.theme.textColor, 0.7)};
  display: flex;
  margin-bottom: ${(props) => props.theme.general.space[1]};
  padding: ${(props) => props.theme.general.space[2]}
    ${(props) => props.theme.general.space[3]};
  text-decoration: none;
  transition: all 0.3s;
  width: 90%;

  &:hover {
    background-color: ${(props) => darken(0.05, props.theme.aside)};
    padding-left: 20px;
  }

  &.actived {
    background-color: ${(props) => darken(0.05, props.theme.aside)};
    color: ${(props) => props.theme.textColor};
  }

  > svg {
    font-size: 18px;
    margin-right: 10px;
  }
`;

export const Toggle = styled(UiToggleSwitch)`
  display: none;
  position: absolute;
  bottom: 90px;

  @media (max-width: ${(props) => props.theme.general.sizes.small}) {
    align-items: center;
    display: flex;
  }
`;
