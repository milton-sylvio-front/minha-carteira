import styled from 'styled-components';
import { rgba } from 'polished';

import { bordersRadius, space } from '@/styles/themes/general';

import type { IModalSizes } from './types';

export const ModalOverlay = styled.div`
  align-items: center;
  background: ${({ theme }) => rgba(theme.backoundColorDark, 0.8)};
  backdrop-filter: blur(6px);
  display: flex;
  height: 100vh;
  inset: 0;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 9999;
`;

export const ModalContainer = styled.section<{ size: IModalSizes }>`
  background: ${({ theme }) => theme.backoundColorLight};
  border-radius: ${bordersRadius.normal};
  box-shadow: 0 ${space[2]} ${space[7]} rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.textColor};
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${space[6]};
  width: 100%;
  max-width: ${({ size }) => {
    const sizes = {
      sm: '384px',
      md: '448px',
      lg: '512px',
    };

    return sizes[size as IModalSizes] ?? sizes.md;
  }};
`;
