import { Navigate, Outlet } from 'react-router-dom';

import { InternalPagesTemplate } from '@/templates/InternalPages';
import { UiLoading } from '@/components/UI';

import { useAuthSession } from '@/hooks/useAuthSession';
import { PATHS } from '@/helpers/configs/paths';

const { SIGN_IN } = PATHS;

export const PrivateRoute = () => {
  const { user, loading } = useAuthSession();

  const PrivateComponents = () => (
    <InternalPagesTemplate>
      <Outlet />
    </InternalPagesTemplate>
  );

  if (loading) {
    return <UiLoading />;
  }

  if (!user) {
    return <Navigate to={SIGN_IN.url} replace />;
  }

  return <PrivateComponents />;
};
