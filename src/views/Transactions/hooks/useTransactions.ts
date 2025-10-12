import { useState, useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/helpers/utils/firebase';
import { TIMEOUT } from '@/helpers/utils/constants';

import { getFinancialRegister, insertFinancialRegister } from '../services';
import type { IDataTransactionsProps } from '../types';

export const useTransactions = () => {
  const [user, loading] = useAuthState(auth);

  const [data, setData] = useState<IDataTransactionsProps[]>([]);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const timeout = () => {
    setTimeout(() => {
      setLoadingPage(false);
    }, TIMEOUT);
  };

  const add = useCallback(
    async (infos: IDataTransactionsProps) => {
      setLoadingPage(true);
      setSuccess('');
      setError('');

      try {
        if (!loading) {
          const data = { ...infos, userId: user?.uid };
          const response = await insertFinancialRegister(data);
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
    },
    [loading, user?.uid]
  );

  const get = useCallback(async () => {
    setLoadingPage(true);
    setError('');

    try {
      if (!loading) {
        const response = await getFinancialRegister(user?.uid);

        if (response) {
          setData(response);
        }
      }
    } catch (err) {
      console.error('Erro no useTransactions (get):', err);
      setError(err?.toString() || '');
    } finally {
      timeout();
    }
  }, [loading, user?.uid]);

  return {
    add,
    get,
    data,
    error,
    loadingPage,
    success,
  };
};
