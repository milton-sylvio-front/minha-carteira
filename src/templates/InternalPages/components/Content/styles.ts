import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.main`
  grid-area: CT;
  height: 100vh;
  overflow-y: auto;
  padding: ${(props) => props.theme.general.space[7]};
  position: relative;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbar.thumb};
    border-radius: ${(props) => props.theme.general.bordersRadius.large};
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollbar.track};
  }

  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    padding: ${(props) => props.theme.general.space[4]};
  }
`;

export const Overlay = styled.div`
  @media (max-width: ${(props) => props.theme.general.sizes.medium}) {
    z-index: 2;

    &.overlay {
      background-color: ${(props) => rgba(props.theme.backoundColor, 0.85)};
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }
`;
