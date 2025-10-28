export type ICategoryType = string | 'gains' | 'expenses';

export interface IDataCategoriesProps {
  actived?: boolean;
  created: number;
  description: string;
  id?: string;
  parentCategory?: string;
  system?: boolean;
  type: ICategoryType | string;
  userId?: string;
}
