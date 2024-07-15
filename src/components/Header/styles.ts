import styled from 'styled-components';
import { darken, rgba } from 'polished';

import { UiToggleSwitch } from '../../components/UI';

export const Container = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.header};
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  grid-area: MH;
  justify-content: space-between;
  padding: 0 15px;
  z-index: 3;

  .logo {
    display: none;

    @media (max-width: ${(props) => props.theme.general.sizes.small}) {
      display: block;
      margin-right: ${(props) => props.theme.general.space[4]};

      > span {
        display: none;
      }
    }
  }
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
  padding: 0 15px;
`;

export const Welcome = styled.h3`
  font-size: ${(props) => props.theme.general.fontSizes[3]};

  @media (max-width: ${(props) => props.theme.general.sizes.small}) {
    font-size: ${(props) => props.theme.general.fontSizes[0]};
  }
`;

export const UserName = styled.small`
  display: block;
  font-weight: ${(props) => props.theme.general.fontWeights.normal};
`;

export const Emojis = styled.span`
  font-size: ${(props) => props.theme.general.fontSizes[5]};
  padding-right: ${(props) => props.theme.general.space[2]};

  @media (max-width: ${(props) => props.theme.general.sizes.small}) {
    font-size: ${(props) => props.theme.general.fontSizes[4]};
  }
`;

export const MenuMobile = styled.button`
  @media (max-width: ${(props) => props.theme.general.sizes.small}) {
    align-items: center;
    background: transparent;
    color: ${(props) => rgba(props.theme.textColor, 0.7)};
    display: flex;
    font-size: ${(props) => props.theme.general.fontSizes[5]};
    height: 70px;
    justify-content: center;
    width: 50px;

    &.open {
      background-color: ${(props) => darken(0.025, props.theme.header)};
      color: ${(props) => props.theme.textColor};
    }
  }
`;

export const Toggle = styled(UiToggleSwitch)`
  @media (max-width: ${(props) => props.theme.general.sizes.small}) {
    display: none;
  }
`;

export const ContainerActionsMobile = styled.div`
  display: none;

  @media (max-width: ${(props) => props.theme.general.sizes.small}) {
    align-items: center;
    display: flex;

    > span {
      visibility: hidden;
    }
  }
`;
