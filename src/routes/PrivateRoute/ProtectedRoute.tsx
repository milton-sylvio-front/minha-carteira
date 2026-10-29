import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/helpers/utils/firebase';

export function ProtectedRoute() {
  const [user, loading] = useAuthState(auth);

  // Exibe uma tela de carregamento enquanto o Firebase valida o estado da sessão
  if (loading) {
    return <div>Carregando sessão...</div>;
  }

  // Se NÃO houver usuário, redireciona para a página de login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Se houver usuário, renderiza os componentes filhos (rotas internas)
  return <Outlet />;
}
