import type { IModalFooterProps } from './types';
import { ModalFooter } from './styles';

export const UiModalFooter = ({ children }: IModalFooterProps) => (
  <ModalFooter>{children}</ModalFooter>
);
