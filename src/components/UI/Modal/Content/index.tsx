import type { IModalContentProps } from './types';
import { ModalContent } from './styles';

export const UiModalContent = ({ children }: IModalContentProps) => (
  <ModalContent>{children}</ModalContent>
);
