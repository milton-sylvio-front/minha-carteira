import styled from 'styled-components';

import { space } from '@/styles/themes/general';

export const ModalFooter = styled.footer`
  display: flex;
  flex-direction: row;
  gap: ${space[2]};
  justify-content: flex-end;
  margin-top: ${space[8]};
  position: relative;
  width: 100%;
`;
