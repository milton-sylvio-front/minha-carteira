import type { IDataTransactionsProps } from '../../types';

export type TransactionModalMode = 'create' | 'edit' | 'delete';

export interface IProps {
  isOpen: boolean;
  mode?: TransactionModalMode;
  onClose: () => void;
  onSuccess: (isSuccess: boolean) => void;
  transaction?: IDataTransactionsProps;
}
