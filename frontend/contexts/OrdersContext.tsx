import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { getAllOrders as apiGetAllOrders, updateOrderStatus as apiUpdateOrderStatus, OrderDto, Page } from '../src/api/orders';

// Types
export type OrderStatus = 'CREATED' | 'PROCESSING' | 'READY' | 'COMPLETED' | 'CANCELLED';

export interface OrderItem { quantity: number; name?: string; coffeeId?: string }

export interface Order {
  id: string;
  items: OrderItem[];
  status: OrderStatus;
  userId?: string;
  total?: number;
  date?: string;
}

interface OrdersContextType {
  orders: Order[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  refresh: (page?: number, size?: number, status?: OrderStatus) => Promise<void>;
  updateOrderStatus: (orderId: string, status: OrderStatus) => Promise<void>;
  getActiveOrders: () => Order[];
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const fetchedRef = useRef(false);

  const mapOrderDtoToOrder = (dto: OrderDto): Order => ({
    id: dto.id,
    status: dto.status as OrderStatus,
    userId: dto.userId,
    items: (dto.items || []).map(i => ({ quantity: i.quantity, name: (i as any).name, coffeeId: (i as any).coffeeId })),
    total: dto.totalCost,
    date: dto.createdAt,
  });

  const refresh = async (p: number = page, s: number = size, status?: OrderStatus) => {
    const pageData: Page<OrderDto> = await apiGetAllOrders(p, s, status);
    setOrders(pageData.content.map(mapOrderDtoToOrder));
    setPage(pageData.number);
    setSize(pageData.size);
    setTotalPages(pageData.totalPages);
    setTotalElements(pageData.totalElements);
  };

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    refresh();
  }, []);

  const updateOrderStatus = async (orderId: string, status: OrderStatus) => {
    const updated = await apiUpdateOrderStatus(orderId, status);
    setOrders(prev => prev.map(o => (o.id === orderId ? { ...o, status: updated.status as OrderStatus } : o)));
  };

  const getActiveOrders = (): Order[] => orders.filter(o => ['CREATED', 'PROCESSING', 'READY'].includes(o.status));

  return (
    <OrdersContext.Provider value={{ orders, page, size, totalPages, totalElements, refresh, updateOrderStatus, getActiveOrders }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error('useOrders must be used within an OrdersProvider');
  return ctx;
}
