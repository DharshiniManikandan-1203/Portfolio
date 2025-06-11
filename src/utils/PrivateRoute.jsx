import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';

/**
  Wrap any component that should only be accessible to logged-in users.
  If the user is not authenticated, then it will redirect to the login page.

  @param {JSX.Element} children - The component to render if authenticated
 */
export default function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}
