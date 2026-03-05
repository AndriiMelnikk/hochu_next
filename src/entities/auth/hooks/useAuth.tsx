import { createContext, useContext, useEffect, ReactNode, useMemo } from 'react';
import { authService } from '../services/authService';
import type { IUser } from '@entities/user';
import { useAuthStore } from '../store/authStore';
import { ILoginRequest } from '../types/requests/LoginRequest';
import { IRegisterRequest } from '../types/requests/RegisterRequest';

interface AuthContextType {
  auth: boolean;
  user: IUser | null;
  login: (data: ILoginRequest) => Promise<void>;
  register: (data: IRegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isAuth, user, login, register, logout, setAuth, setUser } = useAuthStore();

  useEffect(() => {
    const initAuth = async () => {
      if (authService.isAuthenticated()) {
        try {
          const user = await authService.getMe();
          setAuth(true);
          setUser(user);
        } catch (error) {
          setAuth(false);
          setUser(null);
        }
      }
    };

    initAuth();
  }, [setAuth, setUser]);

  const value = useMemo(
    () => ({ auth: isAuth, user, login, register, logout }),
    [isAuth, user, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
