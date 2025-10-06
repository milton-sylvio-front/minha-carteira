import styled from 'styled-components';
import { rgba } from 'polished';
import { bordersRadius, space } from '@/styles/themes/general';

export const ModalOverlay = styled.div`
  align-items: center;
  background: ${({ theme }) => rgba(theme.backoundColorDark, 0.8)};
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

export const ModalContent = styled.div`
  background: #23263a;
  border-radius: ${bordersRadius.normal};
  padding: ${space[6]};
  box-shadow: 0 ${space[2]} ${space[7]} rgba(0, 0, 0, 0.2);
  color: #fff;
`;
