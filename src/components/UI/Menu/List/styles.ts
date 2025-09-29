import styled from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';

import { bordersRadius } from '@/styles/themes/general';

import type { IMenuListStyles } from './types';

export const Container = styled.div<IMenuListStyles>`
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  background-color: ${(props) => props.theme.backoundColor};
  border-radius: ${bordersRadius.normal};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-direction: column;
  min-width: 160px;
  position: absolute;
  z-index: 5555;

  > a:first-child {
    border-top-left-radius: ${bordersRadius.normal};
    border-top-right-radius: ${bordersRadius.normal};
  }

  > a:last-child {
    border-bottom-left-radius: ${bordersRadius.normal};
    border-bottom-right-radius: ${bordersRadius.normal};
  }
`;
