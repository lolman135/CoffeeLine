import { apiFetch } from './client';

export interface CategoryDto {
  id: string;
  name: string; // e.g. "Hot" | "Cold"
}

export async function getCategoryByName(name: 'Hot' | 'Cold' | string): Promise<CategoryDto> {
  return apiFetch<CategoryDto>(`/api/v1/categories/name/${encodeURIComponent(name)}`);
}

