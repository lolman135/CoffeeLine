import { apiFetch } from './client';

// Frontend Drink type reused from data/drinks
export interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId?: string;
}

// Backend DTO shapes (inferred)
interface CoffeeResponseDto {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  categoryId?: string;
}
interface CoffeeListResponseDto { coffees: CoffeeResponseDto[] } // may be named 'coffees' or similar

// Map backend DTO to frontend Drink
function toDrink(dto: CoffeeResponseDto): Drink {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    price: dto.price,
    image: dto.imageUrl || '',
    categoryId: dto.categoryId,
  };
}

export async function fetchCoffees(): Promise<Drink[]> {
  // Expecting { coffees: [...] } or { items: [...] }. Try both.
  const data = await apiFetch<CoffeeListResponseDto | { items: CoffeeResponseDto[] }>(
    '/api/v1/coffees'
  );
  const list = (data as CoffeeListResponseDto).coffees || (data as { items: CoffeeResponseDto[] }).items;
  return (list || []).map(toDrink);
}

export async function fetchCoffeeById(id: string): Promise<Drink> {
  const dto = await apiFetch<CoffeeResponseDto>(`/api/v1/coffees/${id}`);
  return toDrink(dto);
}

