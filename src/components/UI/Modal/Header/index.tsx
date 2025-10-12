import { MdClose } from 'react-icons/md';

import { UiIconButton } from '@/components/UI/IconButton';

import { Container, Title } from './styles';
import type { IModalHeaderProps } from './types';

export const UiModalHeader = ({
  children,
  onClickClose,
}: IModalHeaderProps) => (
  <Container>
    <Title>{children}</Title>
    <UiIconButton
      aria-label="Fechar"
      icon={<MdClose />}
      onClick={onClickClose}
    />
  </Container>
);
