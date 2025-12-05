// Simple typed API client with base URL and JSON handling
export interface ApiError {
  status: number;
  message: string;
  details?: unknown;
}

const BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:8080';

// Helper to build full URL
function url(path: string) {
  if (path.startsWith('http')) return path;
  return `${BASE_URL}${path}`;
}

// Optional token provider
let getToken: (() => string | null) | null = () => {
  try { return localStorage.getItem('authToken'); } catch { return null; }
};
export function registerTokenProvider(provider: () => string | null) {
  getToken = provider;
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    ...(init?.body ? { 'Content-Type': 'application/json' } : {}),
    ...(init?.headers as Record<string, string> | undefined),
  };

  // Inject Bearer token if available
  const token = getToken ? getToken() : null;
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(url(path), { ...init, headers });

  const contentType = res.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');
  const payload = isJson ? await res.json().catch(() => null) : null;

  if (!res.ok) {
    const err = {
      status: res.status,
      message: (payload && (payload.message || payload.title)) || res.statusText,
      details: payload,
    } as ApiError;

    if (res.status === 401) {
      try { localStorage.removeItem('authToken'); } catch {}
      // Redirect to login (HashRouter)
      if (typeof window !== 'undefined') {
        window.location.hash = '#/login';
      }
    }

    throw err;
  }

  return payload as T;
}
