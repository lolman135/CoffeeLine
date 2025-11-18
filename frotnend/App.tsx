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

export default function App() {
  return (
    <AuthProvider>
      <OrdersProvider>
        <DrinksProvider>
          <CartProvider>
            <HashRouter>
              <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/catalog" element={<MainPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<OrderPlacementPage />} />
                <Route path="/order-status/:orderId" element={<OrderStatusPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/cashier" element={<CashierPanel />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
            </HashRouter>
          </CartProvider>
        </DrinksProvider>
      </OrdersProvider>
    </AuthProvider>
  );
}