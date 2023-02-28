import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

export const ProtectedRoute = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to='/' />;
};
