import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import { Link } from 'react-router-dom';
import {
  bordersRadius,
  colors,
  fontSizes,
  fontWeights,
  sizes,
  space,
} from '@/styles/themes/general';

interface IContainerProps {
  menuIsOpen: boolean;
}

export const Container = styled.aside<IContainerProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.aside};
  box-shadow: 0 5px 10px ${rgba(colors.black, 0.05)};
  display: flex;
  flex-direction: column;
  grid-area: AS;
  height: 100vh;
  justify-content: space-between;
  max-width: 250px;
  z-index: 1;

  @media (max-width: ${sizes.small}) {
    align-items: center;
    height: 100%;
    justify-content: space-between;
    position: fixed;
    top: 70px;
    transform: translate3d(-200px, 0, 0);
    transform: translateX(-200px);
    transition: 300ms ease all;
    visibility: ${({ menuIsOpen }) => (menuIsOpen ? 'visible' : 'hidden')};
    width: 200px;
    z-index: 4;

    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        transform: translate3d(0, 0, 0);
        transform: translateX(0);
      `};
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  padding: ${space[7]} ${space[1]};
  height: 70px;

  @media (max-width: ${sizes.small}) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: ${space[8]};

  @media (max-width: ${sizes.small}) {
    margin-top: ${space[5]};
  }
`;

export const MenuItem = styled(Link)`
  align-items: center;
  border-radius: ${bordersRadius.normal};
  color: ${({ theme }) => rgba(theme.textColor, 0.7)};
  display: flex;
  margin-bottom: ${space[1]};
  padding: ${space[2]} ${space[3]};
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.aside)};
    padding-left: 20px;
    text-decoration: none;
  }

  &.actived {
    background-color: ${colors.primary};
    color: ${({ theme }) => theme.textColor};
  }

  &.actived:hover {
    padding-left: ${space[3]};
  }

  > svg {
    font-size: 18px;
    margin-right: 10px;
  }
`;

export const Profile = styled.section`
  align-items: center;
  display: flex;
  padding: ${space[5]} ${space[0]};
`;

export const UserName = styled.span`
  display: block;
  font-size: ${fontSizes[1]};
  font-weight: ${fontWeights.bold};
`;

export const UserEmail = styled.span`
  display: block;
  font-size: ${fontSizes[0]};
  font-weight: ${fontWeights.normal};
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Avatar = styled.div`
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 50%;
  border: 0;
  color: ${colors.white};
  display: flex;
  font-size: ${fontSizes[2]};
  height: 40px;
  justify-content: center;
  margin-right: ${space[2]};
  text-transform: uppercase;
  width: 40px;

  @media (max-width: ${sizes.small}) {
    font-size: ${fontSizes[4]};
  }
`;
