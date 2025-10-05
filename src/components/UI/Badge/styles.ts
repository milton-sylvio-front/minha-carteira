import styled from 'styled-components';

import {
  bordersRadius,
  colors,
  fontSizes,
  fontWeights,
  space,
} from '@/styles/themes/general';

import type {
  IUiBadgeProps,
  IBadgeColorTypes,
  IBadgeSizes,
  IBadgeVariants,
} from './types';

export const Container = styled('span')<IUiBadgeProps>`
  color: ${colors.white};
  display: inline-flex;
  font-weight: ${fontWeights.bold};
  text-align: center;
  white-space: nowrap;

  ${({ variantion, colorType }) => {
    const setVariation = {
      solid: `background-color: ${colors[colorType as IBadgeColorTypes]}; color: ${colors.white};`,
      outline: `background-color: transparent; border: 1px solid ${colors[colorType as IBadgeColorTypes]}; color: ${colors[colorType as IBadgeColorTypes]};`,
      ghost: `background-color: transparent; color: ${colors[colorType as IBadgeColorTypes]};`,
    };

    return setVariation[variantion as IBadgeVariants] ?? setVariation.solid;
  }}

  border-radius: ${({ size }) => {
    const setSize = {
      sm: bordersRadius.small,
      md: bordersRadius.normal,
      lg: bordersRadius.large,
    };

    return setSize[size as IBadgeSizes] ?? setSize.md;
  }};

  font-size: ${({ size }) => {
    const setSize = {
      sm: fontSizes[0],
      md: fontSizes[1],
      lg: fontSizes[2],
    };

    return setSize[size as IBadgeSizes] ?? setSize.md;
  }};

  padding: ${({ size }) => {
    const setSize = {
      sm: `${space[1]} ${space[2]}`,
      md: `${space[2]} ${space[3]}`,
      lg: `${space[3]} ${space[4]}`,
    };

    return setSize[size as IBadgeSizes] ?? setSize.md;
  }};
`;
