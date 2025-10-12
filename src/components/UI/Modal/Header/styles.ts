import styled from 'styled-components';

import { fontSizes, fontWeights, space } from '@/styles/themes/general';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${space[8]};
`;

export const Title = styled.h5`
  font-size: ${fontSizes[3]};
  font-weight: ${fontWeights.bold};
  margin-inline-end: ${space[2]};
`;
