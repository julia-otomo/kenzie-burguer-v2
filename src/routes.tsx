import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { ProtectedRoute } from './pages/Protected route';
import { CartProvider } from './Contexts/CartContext';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />

    <Route path='/shop' element={<ProtectedRoute />}>
      <Route
        index
        element={
          <CartProvider>
            <ShopPage />
          </CartProvider>
        }
      />
    </Route>
  </Routes>
);
export default Router;
