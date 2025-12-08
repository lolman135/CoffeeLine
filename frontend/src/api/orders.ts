import { apiFetch } from './client';

export interface OrderItemRequestDto { coffeeId: string; quantity: number }
export interface OrderRequestDto { userId: string; orderItems: OrderItemRequestDto[] | Set<OrderItemRequestDto> }

export interface OrderResponseDto { id: string; status?: string }

export async function createOrder(payload: OrderRequestDto): Promise<OrderResponseDto> {
  return apiFetch<OrderResponseDto>('/api/v1/orders', {
    method: 'POST',
    body: JSON.stringify({
      userId: payload.userId,
      orderItems: Array.isArray(payload.orderItems) ? payload.orderItems : Array.from(payload.orderItems),
    }),
  });
}

export interface OrderItemDto { coffeeId: string; quantity: number; name?: string }
export interface OrderDto { id: string; userId: string; status: string; items?: OrderItemDto[]; totalCost?: number; createdAt?: string }

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number; // current page index
  size: number; // page size
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export async function getOrderById(id: string): Promise<OrderDto> {
  return apiFetch<OrderDto>(`/api/v1/orders/${id}`);
}

export async function getAllOrders(page = 0, size = 20, status?: string): Promise<Page<OrderDto>> {
  const params = new URLSearchParams();
  params.set('page', String(page));
  params.set('size', String(size));
  if (status) params.set('status', status);
  const res = await apiFetch<Page<OrderDto>>(`/api/v1/orders?${params.toString()}`);
  return res;
}

export async function getOrdersByUserId(userId: string): Promise<OrderDto[]> {
  const res = await apiFetch<any>(`/api/v1/orders/by-userId/${userId}`);
  if (Array.isArray(res)) return res as OrderDto[];
  if (res && res.orders) return res.orders as OrderDto[];
  return [];
}

// Backend uses PATCH /api/v1/orders with body { id, status }
export async function updateOrderStatus(orderId: string, status: string): Promise<OrderDto> {
  return apiFetch<OrderDto>('/api/v1/orders', {
    method: 'PATCH',
    body: JSON.stringify({ id: orderId, status }),
  });
}
