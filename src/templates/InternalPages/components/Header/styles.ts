import styled from 'styled-components';
import { darken, rgba } from 'polished';
import { fontSizes, sizes, space } from '@/styles/themes/general';

export const Container = styled.header`
  display: none;

  @media (max-width: ${sizes.small}) {
    display: flex;
  }

  align-items: center;
  background-color: ${(props) => props.theme.header};
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.05);
  grid-area: MH;
  justify-content: space-between;
  padding: 0 15px;
  z-index: 3;

  .logo {
    display: none;

    @media (max-width: ${sizes.small}) {
      display: block;
      margin-right: ${space[4]};

      > span {
        display: none;
      }
    }
  }
`;

export const MenuMobile = styled.button`
  @media (max-width: ${sizes.small}) {
    align-items: center;
    background: transparent;
    color: ${(props) => rgba(props.theme.textColor, 0.7)};
    display: flex;
    font-size: ${fontSizes[5]};
    height: 70px;
    justify-content: center;
    width: 50px;

    &.open {
      background-color: ${(props) => darken(0.025, props.theme.header)};
      color: ${(props) => props.theme.textColor};
    }
  }
`;

export const ContainerActionsMobile = styled.div`
  display: none;

  @media (max-width: ${sizes.small}) {
    align-items: center;
    display: flex;

    > span {
      visibility: hidden;
    }
  }
`;
