import { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  auth,
  collection,
  db,
  orderBy,
  query,
  getDocs,
  where,
  startAfter,
  DocumentSnapshot,
  limit,
  getCountFromServer,
} from '@/helpers/utils/firebase';

type UsePaginatedQueryParams = {
  orderField: string;
  orderDirection?: 'asc' | 'desc';
  pageSize: number;
};

import { COLLECTION_NAME } from '../utils/constants';

export function usePaginatedQueryWithUrl({
  orderField,
  orderDirection = 'asc',
  pageSize,
}: UsePaginatedQueryParams) {
  const cursors = useRef<Map<number, DocumentSnapshot | null>>(new Map());
  const [user, loading] = useAuthState(auth);

  const setCollection = collection(db, COLLECTION_NAME);
  const setCondition = where('userId', '==', user?.uid);
  const setOrderBy = orderBy(orderField, orderDirection);
  const setLimitPerPage = limit(pageSize);

  const [data, setData] = useState<any[]>([]);
  const [loadingPage, setLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);

  const fetchPage = async (targetPage: number) => {
    setLoading(true);

    if (!loading) {
      const all = query(setCollection, setCondition);
      const totals = await getCountFromServer(all);
      setTotalItems(totals.data().count);

      const totalPages = Math.ceil(totals.data().count / pageSize);

      console.log('totalItems:', totalItems);
      console.log('targetPage:', targetPage);
      console.log('totalPages:', totalPages);

      // if (targetPage > totalPages) {
      //   setTotalItems(0);
      //   setData([]);
      //   setLoading(false);

      //   return;
      // }

      let q;
      if (targetPage === 1) {
        q = query(setCollection, setCondition, /*setOrderBy,*/ setLimitPerPage);
      } else {
        const cursor = cursors.current.get(targetPage - 1);
        q = query(
          setCollection,
          setCondition,
          setOrderBy,
          startAfter(cursor!),
          setLimitPerPage
        );
      }

      const snapshot = await getDocs(q);
      setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      cursors.current.set(
        targetPage,
        snapshot.docs[snapshot.docs.length - 1] || null
      );

      setLoading(false);
    }
  };

  return {
    data,
    loadingPage,
    totalItems,
    fetchPage,
  };
}
