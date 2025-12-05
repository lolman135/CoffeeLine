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

export interface OrderItemDto { coffeeId: string; quantity: number }
export interface OrderDto { id: string; userId: string; status: string; items?: OrderItemDto[]; total?: number; date?: string; time?: string }

export async function getOrderById(id: string): Promise<OrderDto> {
  return apiFetch<OrderDto>(`/api/v1/orders/${id}`);
}

export async function getAllOrders(): Promise<{ orders: OrderDto[] } | OrderDto[]> {
  const res = await apiFetch<any>('/api/v1/orders');
  // support both wrapped and raw arrays
  if (Array.isArray(res)) return res as OrderDto[];
  if (res && res.orders) return res as { orders: OrderDto[] };
  return res;
}

export async function getOrdersByUserId(userId: string): Promise<{ orders: OrderDto[] } | OrderDto[]> {
  const res = await apiFetch<any>(`/api/v1/orders/by-userId/${userId}`);
  if (Array.isArray(res)) return res as OrderDto[];
  if (res && res.orders) return res as { orders: OrderDto[] };
  return res;
}
