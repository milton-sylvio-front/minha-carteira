import styled from 'styled-components';
import { rgba, math } from 'polished';

import { colors, fontSizes, space, sizes } from '@/styles/themes/general';

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  > div {
    flex: 1;
  }

  &.form-vertical {
    flex-direction: column;
  }

  &.flex-end {
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media (max-width: ${sizes.small}) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${space[3]};
  width: 100%;
`;

export const FormErrorMessage = styled.div`
  color: ${colors.danger};
  font-size: ${fontSizes[0]};
  margin-top: ${space[1]};
`;

export const FormLabel = styled.label`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${space[1]};

  small {
    color: ${({ theme }) => rgba(theme.textColor, 0.7)};
    cursor: pointer;
    font-size: ${math(`${fontSizes[0]} - 2`)};
    text-transform: uppercase;

    &:hover {
      color: ${colors.primary};
    }
  }
`;
