import type { IModalProps } from '@/components/UI/Modal/Modal/types';
import type { IDataCategoriesProps } from '../../types';

export interface IProps extends Partial<IModalProps> {
  data: IDataCategoriesProps[];
  onSuccess: (isSuccess: boolean) => void;
}
