import styled from 'styled-components';
import { position, system } from 'styled-system';
import { rgba } from 'polished';

import { bordersRadius, colors } from '@/styles/themes/general';

import type { IUiMenuList } from './types';

const customTransform = system({
  transform: {
    property: 'transform',
  },
});

export const Container = styled.div<IUiMenuList>`
  ${position};
  ${customTransform}

  background-color: ${({ theme }) => theme.backoundColor};
  border-radius: ${bordersRadius.normal};
  box-shadow: 0 2px 4px 0 ${rgba(colors.black, 0.25)};
  flex-direction: column;
  display: flex;
  position: absolute;
  z-index: 5555;
  left: 0%;

  ${({ position }) => position === 'top' && `bottom: 100%;`};
  ${({ position }) => position === 'bottom' && `top: 100%;`};

  > a:first-child {
    border-top-left-radius: ${bordersRadius.normal};
    border-top-right-radius: ${bordersRadius.normal};
  }

  > a:last-child {
    border-bottom-left-radius: ${bordersRadius.normal};
    border-bottom-right-radius: ${bordersRadius.normal};
  }
`;
