import styled from 'styled-components';
import { rgba } from 'polished';
import { bordersRadius, sizes, space } from '@/styles/themes/general';

export const Container = styled.main`
  grid-area: CT;
  height: 100vh;
  overflow-y: auto;
  padding: ${space[7]} ${space[7]} ${space[7]} ${space[1]};
  position: relative;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbar.thumb};
    border-radius: ${bordersRadius.large};
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.scrollbar.track};
  }

  @media (max-width: ${sizes.medium}) {
    padding: ${space[4]};
  }
`;

export const Overlay = styled.div`
  @media (max-width: ${sizes.medium}) {
    z-index: 2;

    &.overlay {
      background-color: ${({ theme }) => rgba(theme.backoundColor, 0.85)};
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }
`;
