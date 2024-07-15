export interface IData {
  amount: number;
  date: string;
  description: string;
  frequency: string;
  type: string;
}

export type IFinancialRegister = (typeOf: string) => Promise<IData>;
