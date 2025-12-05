import { apiFetch } from './client';

export interface SignInRequest { email: string; password: string }
export interface AuthResponse { token: string }

export async function signIn(req: SignInRequest): Promise<string> {
  const res = await apiFetch<AuthResponse>('/api/v1/auth/sign-in', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  return res.token;
}

export async function fetchMe<T=unknown>(): Promise<T> {
  return apiFetch<T>('/api/v1/users/me');
}

export async function updateMe<T=unknown>(payload: Partial<{ name: string; phoneNumber: string; password: string }>): Promise<T> {
  return apiFetch<T>('/api/v1/users/me', {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

