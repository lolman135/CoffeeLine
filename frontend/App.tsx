import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { OrdersProvider } from './contexts/OrdersContext';
import { DrinksProvider } from './contexts/DrinksContext';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MainPage from './components/MainPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import CartPage from './components/CartPage';
import OrderPlacementPage from './components/OrderPlacementPage';
import OrderStatusPage from './components/OrderStatusPage';
import ProfilePage from './components/ProfilePage';
import CashierPanel from './components/CashierPanel';
import AdminPanel from './components/AdminPanel';

function RequireAuth({ children }: { children: JSX.Element }) {
  const hasToken = (() => { try { return !!localStorage.getItem('authToken'); } catch { return false; } })();
  if (!hasToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <OrdersProvider>
        <DrinksProvider>
          <CartProvider>
            <HashRouter>
              <Routes>
                <Route path="/" element={<Navigate to="/catalog" replace />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/catalog" element={<MainPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<RequireAuth><OrderPlacementPage /></RequireAuth>} />
                <Route path="/order-status/:orderId" element={<RequireAuth><OrderStatusPage /></RequireAuth>} />
                <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
                <Route path="/cashier" element={<RequireAuth><CashierPanel /></RequireAuth>} />
                <Route path="/admin" element={<RequireAuth><AdminPanel /></RequireAuth>} />
              </Routes>
            </HashRouter>
          </CartProvider>
        </DrinksProvider>
      </OrdersProvider>
    </AuthProvider>
  );
}