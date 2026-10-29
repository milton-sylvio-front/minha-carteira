export interface IDataTransactionsProps {
  amount: number;
  category?: string;
  created: number;
  date: string;
  description: string;
  frequency: string;
  id?: string;
  idCategory?: string;
  paid?: boolean;
  type: string;
  userId?: string;
}
