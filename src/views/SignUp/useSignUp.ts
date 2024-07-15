import { useState, useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { TIMEOUT } from '../../helpers/utils/constants';
import {
  addDoc,
  auth,
  collection,
  createUserWithEmailAndPassword,
  db,
} from '../../helpers/utils/firebase';

export const useSignUp = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [user, loading] = useAuthState(auth);

  const timeout = () => {
    setTimeout(() => {
      setLoader(false);
    }, TIMEOUT);
  };

  const getError = (code: string) => {
    const type = {
      'auth/email-already-in-use': 'E-mail já cadastrado!',
    };

    return type[code] ?? '';
  };

  const register = useCallback(async (email, password, name, phone) => {
    setLoader(true);
    setError('');

    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('Successfully signed up!', res);
        const user = res?.user;
        addDoc(collection(db, 'Users'), {
          uid: user?.uid,
          name,
          phone,
          authProvider: 'local',
          email,
        });
      })
      .catch((err) => {
        console.error('Erro no register > code:', err.code);
        console.error('Erro no register > message:', err.message);

        const msg = getError(err.code);

        setError(msg);
      })
      .finally(timeout);
  }, []);

  return {
    register,
    loader,
    error,
    loading,
    user,
  };
};
