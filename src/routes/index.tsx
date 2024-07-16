//
// import { BrowserRouter } from 'react-router-dom'
// import { useAuthState } from 'react-firebase-hooks/auth'

// import { auth } from 'helpers/utils/firebase'

// import { UiLoading } from 'components/UI'

// import App from './app.routes'
// import Auth from './auth.routes'

// const Routes: React.FC = () => {
//   const [user, loading] = useAuthState(auth)

//   return (
//     <BrowserRouter>
//       {
//         loading ? <UiLoading /> : (user ? <App /> : <Auth />)
//       }
//     </BrowserRouter>
//   )
// }

// export default Routes

import { Route, Routes as Switch } from 'react-router-dom';

import Dashboard from '../views/Dashboard';
import List from '../views/List';
import NewRegister from '../views/NewRegister';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';

import { PATHS } from '../helpers/configs/paths';

import { PrivateRoute } from './PrivateRoute';

const { DASHBOARD, HOME, LISTING, NEW_REGISTER, SIGN_IN, SIGN_UP } = PATHS;

const Routes = () => (
  <Switch>
    <Route path={HOME.url} element={<PrivateRoute />}>
      <Route path={DASHBOARD.url} element={<Dashboard />} />
      <Route path={LISTING.url} element={<List />} />
      <Route path={NEW_REGISTER.url} element={<NewRegister />} />
    </Route>
    <Route path={SIGN_IN.url} Component={SignIn} />
    <Route path={SIGN_UP.url} Component={SignUp} />
  </Switch>
);

export default Routes;
