import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { authService } from '../services/authService';
import { IRegisterRequest } from '../types/requests/RegisterRequest';
import { ILoginRequest } from '../types/requests/LoginRequest';
import { IUser } from '@entities/user';

interface AuthState {
  user: IUser | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  register: (data: IRegisterRequest) => Promise<void>;
  login: (data: ILoginRequest) => Promise<void>;
  logout: () => void;
  setAuth: (isAuth: boolean) => void;
  setUser: (user: IUser | null) => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  immer((set) => ({
    // Initial State
    user: null,
    isAuth: authService.isAuthenticated(),
    isLoading: false,
    error: null,

    // Actions
    register: async (data: IRegisterRequest) => {
      set({ isLoading: true, error: null });
      try {
        const response = await authService.register(data);
        set({
          user: response.user as IUser,
          isAuth: true,
          isLoading: false,
        });
      } catch (error: any) {
        const errorMessage = error.friendlyMessage || 'Помилка при реєстрації';
        set({
          error: typeof errorMessage === 'string' ? errorMessage : 'Помилка при реєстрації',
          isLoading: false,
        });
        throw error; // Прокидаємо далі для обробки в компоненті (якщо треба)
      }
    },

    login: async (data: ILoginRequest) => {
      set({ isLoading: true, error: null });
      try {
        const response = await authService.login(data);
        set({
          user: response.user as IUser,
          isAuth: true,
          isLoading: false,
        });
      } catch (error: any) {
        const errorMessage = error.friendlyMessage || 'Помилка при вході';
        set({
          error: typeof errorMessage === 'string' ? errorMessage : 'Помилка при вході',
          isLoading: false,
        });
        throw error;
      }
    },

    logout: () => {
      authService.logout();
      set({
        user: null,
        isAuth: false,
      });
    },

    setAuth: (isAuth: boolean) => {
      set({ isAuth });
    },

    setUser: (user: IUser | null) => {
      set({ user });
    },
  })),
);
