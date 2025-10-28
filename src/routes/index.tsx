import { Route, Routes as Switch } from 'react-router-dom';

import Dashboard from '@/views/Dashboard';
import SignIn from '@/views/SignIn';
import SignUp from '@/views/SignUp';
import RecoveryPassword from '@/views/RecoveryPassword';
import { Transactions } from '@/views/Transactions';
import { Categories } from '@/views/Categories';

import { PATHS } from '@/helpers/configs/paths';

import { PrivateRoute } from './PrivateRoute';

const {
  CATEGORIES,
  DASHBOARD,
  HOME,
  RECOVERY_PASSWORD,
  SIGN_IN,
  SIGN_UP,
  TRANSACTIONS,
} = PATHS;

const Routes = () => (
  <Switch>
    <Route path={HOME.url} element={<PrivateRoute />}>
      <Route path={DASHBOARD.url} element={<Dashboard />} />
      <Route path={CATEGORIES.url} element={<Categories />} />
      <Route path={TRANSACTIONS.url} element={<Transactions />} />
    </Route>
    <Route path={SIGN_IN.url} Component={SignIn} />
    <Route path={SIGN_UP.url} Component={SignUp} />
    <Route path={RECOVERY_PASSWORD.url} Component={RecoveryPassword} />
  </Switch>
);

export default Routes;
