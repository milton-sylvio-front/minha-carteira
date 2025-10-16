/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  addDoc,
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

import { COLLECTION_NAME } from '../utils/constants';
import { TIMEOUT } from '@/helpers/utils/constants';

import type { IDataTransactionsProps, IGetDataProps } from '../types';

export function useTransactions() {
  const cursors = useRef<Map<number, DocumentSnapshot | null>>(new Map());
  const [user, loading] = useAuthState(auth);

  const setCollection = collection(db, COLLECTION_NAME);
  const setCondition = where('userId', '==', user?.uid);

  const [data, setData] = useState<any[]>([]);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const timeout = () => {
    setTimeout(() => {
      setLoadingPage(false);
    }, TIMEOUT);
  };

  const fetch = async ({
    orderField,
    orderDirection = 'asc',
    pageSize,
    targetPage,
  }: IGetDataProps) => {
    const setOrderBy = orderBy(orderField, orderDirection);
    const setLimitPerPage = limit(pageSize);
    setLoadingPage(true);
    setError('');

    try {
      if (!loading) {
        const all = query(setCollection, setCondition);
        const totals = await getCountFromServer(all);
        setTotalItems(totals.data().count);

        let q;
        if (targetPage === 1) {
          q = query(setCollection, setCondition, setOrderBy, setLimitPerPage);
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

        setLoadingPage(false);
      }
    } catch (err) {
      console.error('Erro no useTransactions (fetch):', err);
      setError(err?.toString() || '');
    } finally {
      timeout();
    }
  };

  const insert = async (data: IDataTransactionsProps) => {
    setLoadingPage(true);
    setSuccess('');
    setError('');

    try {
      if (!loading) {
        const infos = { ...data, userId: user?.uid };
        const response = await addDoc(setCollection, {
          ...infos,
        });

        if (response) {
          setSuccess('Registro inserido com sucesso!');
        }
      }
    } catch (err) {
      console.error('Erro no useTransactions (add):', err);
      setError(err?.toString() || '');
    } finally {
      timeout();
    }
  };

  return {
    data,
    loadingPage,
    totalItems,
    error,
    success,
    fetch,
    insert,
  };
}
