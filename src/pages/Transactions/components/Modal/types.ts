import type { IModalProps } from '@/components/UI/Modal/Modal/types';

export interface IProps extends Partial<IModalProps> {
  onSuccess: (isSuccess: boolean) => void;
}
