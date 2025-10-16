export interface IDataTransactionsProps {
  amount: number;
  created: number;
  date: string;
  description: string;
  frequency: string;
  id?: string;
  paid?: boolean;
  type: string;
  userId?: string;
}

export type IGetDataorderDirection = 'asc' | 'desc';

export interface IGetDataProps {
  orderField: string;
  orderDirection?: IGetDataorderDirection;
  pageSize: number;
  targetPage: number;
}
