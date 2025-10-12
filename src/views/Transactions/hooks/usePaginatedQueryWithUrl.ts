import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
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
      let q;
      if (targetPage === 1) {
        q = query(setCollection, setCondition, /*setOrderBy,*/ setLimitPerPage);
      } else {
        const cursor = cursors.current.get(targetPage - 1);
        q = query(
          setCollection,
          setCondition,
          // setOrderBy,
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

      const qt = query(setCollection, setCondition);
      const items = await getCountFromServer(qt);
      setTotalItems(items.data().count);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(page);
    // eslint-disable-next-line
  }, [page, orderField, orderDirection, pageSize]);

  const nextPage = () => setSearchParams({ p: String(page + 1) });
  const previousPage = () =>
    page > 1 && setSearchParams({ page: String(page - 1) });

  return { data, loadingPage, nextPage, previousPage, page, totalItems };
}

// Uso no componente
// function MyComponent() {
//   const { data, loading, nextPage, previousPage, page } =
//     usePaginatedQueryWithUrl({
//       db,
//       collectionName: 'posts',
//       orderField: 'createdAt',
//       orderDirection: 'desc',
//       pageSize: 10,
//     })

//   return (
//     <div>
//       <h2>Página {page}</h2>
//       {loading && <p>Carregando...</p>}
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//       <button onClick={previousPage} disabled={page <= 1}>
//         Anterior
//       </button>
//       <button onClick={nextPage}>Próxima</button>
//     </div>
//   )
// }
