import styled from 'styled-components';
import { fontSizes, space, sizes } from '@/styles/themes/general';

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${space[8]};
  width: 100%;

  @media (max-width: ${sizes.medium}) {
    align-items: flex-start;
    margin-bottom: ${space[6]};
    flex-direction: column;
  }
`;

export const TitleHeader = styled.h1`
  @media (max-width: ${sizes.medium}) {
    margin-bottom: ${space[4]};
    font-size: ${fontSizes[4]};
  }
`;

export const Controllers = styled.div`
  display: flex;

  .dropdown {
    &:first-child {
      margin-right: ${space[3]};
      min-width: 110px;
    }

    @media (max-width: ${sizes.medium}) {
      .dropdown {
        &:first-child {
          margin-right: ${space[2]};
        }
      }
    }
  }

  &:nth-child(0) {
    margin-right: ${space[2]};
  }

  @media (max-width: ${sizes.medium}) {
    justify-content: space-between;
    width: 100%;
  }
`;
