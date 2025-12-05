import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type UserRole = 'customer' | 'cashier' | 'admin';

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole | null;
  user: { email: string } | null;
  login: (role: UserRole, email?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [user, setUser] = useState<{ email: string } | null>(null);

  const AUTH_STORAGE_KEY = 'authState';

  // При монтуванні завантажуємо роль з localStorage
  useEffect(() => {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.role) {
          setIsAuthenticated(true);
          setUserRole(parsed.role);
          setUser(parsed.user || null);
        }
      } catch (error) {
        console.error('Error loading auth state:', error);
      }
    }
  }, []);

  const login = (role: UserRole, email?: string) => {
    setIsAuthenticated(true);
    setUserRole(role);
    const userData = email ? { email } : null;
    setUser(userData);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ role, user: userData }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, user, login, logout }}>
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