export type IModalSizes = 'sm' | 'md' | 'lg';

export interface IModalProps {
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
  isOpen: boolean;
  onClose: () => void;
  size?: IModalSizes;
}
