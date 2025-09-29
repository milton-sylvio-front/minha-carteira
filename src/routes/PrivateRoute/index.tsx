import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';

import InternalPagesTemplate from '@/templates/InternalPages';
import { UiLoading } from '@/components/UI';

import { auth } from '@/helpers/utils/firebase';
import { PATHS } from '@/helpers/configs/paths';

const { SIGN_IN } = PATHS;

export const PrivateRoute = () => {
  const [user, loading] = useAuthState(auth);

  const PrivateComponents = () => (
    <InternalPagesTemplate>
      <Outlet />
    </InternalPagesTemplate>
  );

  return loading ? (
    <UiLoading />
  ) : user ? (
    <PrivateComponents />
  ) : (
    <Navigate to={SIGN_IN.url} replace />
  );
};
