import {
  bordersRadius,
  colors,
  fontSizes,
  space,
} from '@/styles/themes/general';

import { CloseButton } from './styles';

export const UiCloseButton = ({ ...rest }) => (
  <CloseButton
    aria-label="Fechar"
    backgroundColor="transparent"
    borderRadius={bordersRadius.small}
    color={colors.black}
    fontSize={fontSizes[3]}
    flexShrink="0"
    height={space[8]}
    title="Fechar"
    width={space[8]}
    {...rest}
  >
    &times;
  </CloseButton>
);
