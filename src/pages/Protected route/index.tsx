import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

export const ProtectedRoute = () => {
  const { user } = useContext(UserContext);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{user ? <Outlet /> : <Navigate to='/' />}</>;
};
