import { apiFetch } from './client';

// Backend DTO shape
export interface CoffeeResponseDto {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category?: string; // e.g., "Hot", "Cold", or others like "White"
}

// Possible list wrappers or plain arrays
type CoffeeArray = CoffeeResponseDto[];
interface CoffeeListResponseDto { coffees: CoffeeResponseDto[] }
interface CoffeeItemsResponseDto { items: CoffeeResponseDto[] }

export async function fetchCoffees(): Promise<CoffeeResponseDto[]> {
  const data = await apiFetch<CoffeeListResponseDto | CoffeeItemsResponseDto | CoffeeArray>(
    '/api/v1/coffees'
  );
  if (Array.isArray(data)) return data;
  if ((data as CoffeeListResponseDto).coffees) return (data as CoffeeListResponseDto).coffees;
  if ((data as CoffeeItemsResponseDto).items) return (data as CoffeeItemsResponseDto).items;
  return [];
}

export async function fetchCoffeeById(id: string): Promise<CoffeeResponseDto> {
  return await apiFetch<CoffeeResponseDto>(`/api/v1/coffees/${id}`);
}
