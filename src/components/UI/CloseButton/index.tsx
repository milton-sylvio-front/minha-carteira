import general from '../../../styles/themes/general';

import { CloseButton } from './styles';

export const UiCloseButton = ({ ...rest }) => (
  <CloseButton
    aria-label="Fechar"
    backgroundColor="transparent"
    borderRadius={general.bordersRadius.small}
    color={general.colors.black}
    fontSize={general.fontSizes[3]}
    flexShrink="0"
    height={general.space[8]}
    title="Fechar"
    width={general.space[8]}
    {...rest}
  >
    &times;
  </CloseButton>
);
