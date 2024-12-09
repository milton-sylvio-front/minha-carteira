import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, signInWithEmailAndPassword } from '../../helpers/utils/firebase';
import { TIMEOUT } from '../../helpers/utils/constants';

export const useSignIn = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [user, loading] = useAuthState(auth);

  const getError = (code: string) => {
    const type = {
      'auth/user-not-found': 'Dados inválidos!',
      'auth/invalid-credential': 'Dados inválidos!',
    };

    return type[code] ?? 'Erro no sistema, tente mais tarde!';
  };

  const login = async (email: string, password: string) => {
    setLoader(true);
    setError('');

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Successfully signed in!');
      })
      .catch((err) => {
        console.error('Erro no login > code:', err.code);
        console.error('Erro no login > message:', err.message);

        const msg = getError(err.code);

        setError(msg);
      })
      .finally(() => {
        setTimeout(() => {
          setLoader(false);
        }, TIMEOUT);
      });
  };

  return {
    login,
    loader,
    error,
    user,
    loading,
  };
};
