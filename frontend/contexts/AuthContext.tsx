import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { signIn, fetchMe, signUp } from '../src/api/auth';

export type UserRole = 'customer' | 'cashier' | 'admin';

interface OrderDto {
  id: string;
  createdAt?: string;
  totalCost?: number;
  status?: string;
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  roles?: string;
  orders?: OrderDto[];
}

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, phoneNumber: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'authToken';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);

  // On mount, load token and try to fetch profile
  useEffect(() => {
    const saved = localStorage.getItem(TOKEN_KEY);
    if (saved) {
      setToken(saved);
      setIsAuthenticated(true);
      fetchMe<UserProfile>()
        .then(setUser)
        .catch(() => {
          // Token invalid, clear it
          localStorage.removeItem(TOKEN_KEY);
          setToken(null);
          setIsAuthenticated(false);
          setUser(null);
        });
    }
  }, []);

  const login = async (email: string, password: string) => {
    const t = await signIn({ email, password });
    localStorage.setItem(TOKEN_KEY, t);
    setToken(t);
    setIsAuthenticated(true);
    const profile = await fetchMe<UserProfile>();
    setUser(profile);
  };

  const register = async (name: string, phoneNumber: string, email: string, password: string) => {
    const t = await signUp({ name, phoneNumber, email, password });
    localStorage.setItem(TOKEN_KEY, t);
    setToken(t);
    setIsAuthenticated(true);
    const profile = await fetchMe<UserProfile>();
    setUser(profile);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}