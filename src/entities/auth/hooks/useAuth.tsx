import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '../services/authService';
import type { IUser } from '@entities/user';

interface AuthContextType {
  auth: boolean;
  user: IUser | null;
  setAuth: (auth: boolean) => void;
  setUser: (user: IUser | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(authService.isAuthenticated());
  const [user, setUser] = useState<IUser | null>(null);

  const login = async (email: string, password: string) => {
    const response = await authService.login({ email, password });
    setAuth(true);
    setUser(response.user);
  };

  const register = async (email: string, password: string, name: string) => {
    const response = await authService.register({ email, password, name });
    setAuth(true);
    setUser(response.user);
  };

  const logout = async () => {
    await authService.logout();
    setAuth(false);
    setUser(null);
  };

  useEffect(() => {
    if (auth && !user) {
      // Load user data if authenticated
      // This will be implemented when user entity is ready
    }
  }, [auth, user]);

  return (
    <AuthContext.Provider value={{ auth, user, setAuth, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
