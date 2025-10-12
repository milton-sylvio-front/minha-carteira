import styled from 'styled-components';

import {
  bordersRadius,
  colors,
  fontSizes,
  sizes,
  space,
} from '@/styles/themes/general';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 20px;
`;

export const ToggleSwitchLabel = styled.span`
  font-size: ${fontSizes[1]};

  @media (max-width: ${sizes.small}) {
    font-size: ${fontSizes[0]};
  }
`;

export const ToggleSwitchContainer = styled.label`
  display: inline-block;
  height: 14px;
  margin: ${space[0]} ${space[3]} ${space[0]} ${space[0]};
  position: relative;
  width: 40px;

  > input {
    height: 0;
    opacity: 0;
    width: 0;
  }
`;

export const ToggleSwitchSpan = styled.span`
  background-color: ${({ theme }) => theme.backoundColorDark};
  border-radius: 20px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  &:before {
    background-color: ${colors.white};
    border-radius: ${bordersRadius.rounded};
    bottom: -3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
    content: '';
    height: 20px;
    left: 0;
    position: absolute;
    transition: 0.4s;
    width: 20px;
  }
`;

export const ToggleSwitchInput = styled.input`
  &:checked + .switch-slider {
    background-color: ${colors.primary};

    &:before {
      transform: translateX(20px);
    }
  }
`;
