import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { PageLoader } from '../components';

// TEMP: Comment middleware untuk testing UI design
// TODO: Uncomment ketika ready untuk production

export function ProtectedRoute({ children }) {
  // const { user, loading } = useAuth();
  //
  // if (loading) {
  //   return <PageLoader />;
  // }
  //
  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }
  
  // TEMP: Return children langsung untuk testing
  return children;
}

export function PublicRoute({ children }) {
  // const { user, loading } = useAuth();
  //
  // if (loading) {
  //   return <PageLoader />;
  // }
  //
  // if (user) {
  //   return <Navigate to="/dashboard" replace />;
  // }
  
  // TEMP: Return children langsung untuk testing
  return children;
}
