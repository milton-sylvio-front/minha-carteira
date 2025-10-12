import {
  addDoc,
  collection,
  db,
  orderBy,
  query,
  getDocs,
  where,
  limit,
} from '@/helpers/utils/firebase';

import type { IDataTransactionsProps } from '../types';

const collectionName = 'FinancialRegister';

export const getFinancialRegister = async (user: string | null | undefined) => {
  const financialRegisterCollection = collection(db, collectionName);
  const condition = where('userId', '==', user);
  const order = orderBy('created', 'desc');
  const setLimitPerPage = limit(5);
  const q = query(
    financialRegisterCollection,
    condition,
    // order,
    setLimitPerPage
  );
  const docs = await getDocs(q);

  console.log('getFinancialRegister > docs > size:', docs.size);

  const data: IDataTransactionsProps[] = [];

  docs.forEach((doc) =>
    data.push({
      ...doc.data(),
      id: doc.id,
    })
  );

  data.map((item) => {
    delete item?.userId;
    return item;
  });

  return data;
};

export const insertFinancialRegister = async (data: IDataTransactionsProps) => {
  const id = await addDoc(collection(db, collectionName), {
    ...data,
  });

  console.log('insertFinancialRegister > id:', id);

  return id;
};
