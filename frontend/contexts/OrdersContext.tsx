import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';

export interface OrderItem {
  name: string;
  size?: string;
  quantity: number;
  additions: string[];
  price: number;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  address?: string;
  items: OrderItem[];
  deliveryMethod: 'delivery' | 'pickup';
  paymentMethod: 'cash' | 'card';
  total: number;
  time: string;
  date: string;
  status: OrderStatus;
  userId?: string; // Для фільтрації замовлень по користувачу
}

interface OrdersContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'time' | 'date' | 'status'>) => string;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  getOrderById: (orderId: string) => Order | undefined;
  getUserOrders: (userId?: string) => Order[];
  getActiveOrders: () => Order[];
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

const ORDERS_STORAGE_KEY = 'coffee_line_orders';

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  // Завантаження замовлень з localStorage при монтуванні
  useEffect(() => {
    const loadOrders = () => {
      const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (stored) {
        try {
          const parsedOrders = JSON.parse(stored);
          setOrders(parsedOrders);
        } catch (error) {
          console.error('Error loading orders:', error);
        }
      }
    };

    loadOrders();
  }, []);

  // Збереження замовлень в localStorage при зміні
  useEffect(() => {
    if (orders.length > 0 || localStorage.getItem(ORDERS_STORAGE_KEY)) {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    }
  }, [orders]);

  // Слухач для синхронізації між вкладками
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === ORDERS_STORAGE_KEY && e.newValue) {
        try {
          const updatedOrders = JSON.parse(e.newValue);
          setOrders(updatedOrders);
        } catch (error) {
          console.error('Error syncing orders:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Генерація унікального ID замовлення
  const generateOrderId = (): string => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    return `CL${timestamp}${random}`.slice(0, 13);
  };

  // Додавання нового замовлення
  const addOrder = (orderData: Omit<Order, 'id' | 'time' | 'date' | 'status'>): string => {
    const now = new Date();
    const newOrder: Order = {
      ...orderData,
      id: generateOrderId(),
      time: now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }),
      date: now.toLocaleDateString('uk-UA'),
      status: 'pending'
    };

    setOrders(prev => [newOrder, ...prev]);
    return newOrder.id;
  };

  // Оновлення статусу замовлення
  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  // Отримання замовлення по ID
  const getOrderById = (orderId: string): Order | undefined => {
    return orders.find(order => order.id === orderId);
  };

  // Отримання замовлень користувача
  const getUserOrders = (userId?: string): Order[] => {
    if (!userId) return [];
    return orders.filter(order => order.userId === userId);
  };

  // Отримання активних замовлень (для касира)
  const getActiveOrders = (): Order[] => {
    return orders.filter(order =>
      order.status === 'pending' || order.status === 'preparing' || order.status === 'ready'
    );
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
        getOrderById,
        getUserOrders,
        getActiveOrders
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}
