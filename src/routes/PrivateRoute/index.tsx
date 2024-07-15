import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'

import InternalPagesTemplate from '../../templates/InternalPages'

import { auth } from '../../helpers/utils/firebase'
import { PATHS } from '../../helpers/configs/paths'

import { IPrivateRoute } from './types'

const { SIGN_IN } = PATHS

export const PrivateRoute = ({ component: Component }: IPrivateRoute) => {
  const [user] = useAuthState(auth)

  const PrivateComponents = () => (
    <InternalPagesTemplate>
      <Component />
    </InternalPagesTemplate>
  )

  return user ? <PrivateComponents /> : <Navigate to={SIGN_IN.url} replace />
}
