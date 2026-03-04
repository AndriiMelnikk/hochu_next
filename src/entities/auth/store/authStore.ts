import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { authService } from '../services/authService';
import { IRegisterRequest } from '../types/requests/RegisterRequest';
import { ILoginRequest } from '../types/requests/LoginRequest';
import { IUser, type IProfile } from '@entities/user';
import type { IAuthResponse } from '../types/responses/AuthResponse';
import { AxiosError } from 'axios';

function buildUserFromAuthResponse(
  account: IAuthResponse['account'],
  profiles: IAuthResponse['profiles'],
  currentProfileId: string,
): IUser {
  const currentProfile = profiles.find((p) => p.id === currentProfileId);
  if (!currentProfile) {
    throw new Error('Current profile not found in profiles list');
  }
  const profile: IProfile = {
    _id: currentProfile.id,
    type: currentProfile.type as IProfile['type'],
    rating: currentProfile.rating,
    xp: currentProfile.xp,
    completedDeals: currentProfile.completedDeals,
    name: currentProfile.name,
    lastName: currentProfile.lastName,
  };
  return { account: account as IUser['account'], profile };
}

interface AuthState {
  user: IUser | null;
  profiles: IAuthResponse['profiles'];
  currentProfileId: string | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  register: (data: IRegisterRequest) => Promise<void>;
  login: (data: ILoginRequest) => Promise<void>;
  logout: () => void;
  switchProfile: (profileId: string) => Promise<void>;
  setAuth: (isAuth: boolean) => void;
  setUser: (user: IUser | null) => void;
  setProfiles: (profiles: IAuthResponse['profiles'], currentProfileId: string) => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  immer((set) => ({
    // Initial State
    user: null,
    profiles: [],
    currentProfileId: null,
    isAuth: authService.isAuthenticated(),
    isLoading: false,
    error: null,

    // Actions
    register: async (data: IRegisterRequest) => {
      set({ isLoading: true, error: null });
      try {
        const response = await authService.register(data);
        const { access_token, refresh_token, account, profiles, currentProfileId } = response;
        const user = buildUserFromAuthResponse(account, profiles, currentProfileId);
        set({
          user,
          profiles,
          currentProfileId,
          isAuth: true,
          isLoading: false,
        });
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data?.friendlyMessage || 'Помилка при реєстрації';
          set({
            error: errorMessage,
            isLoading: false,
          });
          throw error;
        }
      }
    },

    login: async (data: ILoginRequest) => {
      set({ isLoading: true, error: null });
      try {
        const response = await authService.login(data);
        const { access_token, refresh_token, account, profiles, currentProfileId } = response;
        const user = buildUserFromAuthResponse(account, profiles, currentProfileId);
        set({
          user,
          profiles,
          currentProfileId,
          isAuth: true,
          isLoading: false,
        });
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data?.friendlyMessage || 'Помилка при вході';
          set({
            error: errorMessage,
            isLoading: false,
          });
          throw error;
        }
      }
    },

    logout: () => {
      authService.logout();
      set({
        user: null,
        profiles: [],
        currentProfileId: null,
        isAuth: false,
      });
    },

    switchProfile: async (profileId: string) => {
      try {
        const response = await authService.switchProfile(profileId);
        const { account, profiles, currentProfileId } = response;
        const user = buildUserFromAuthResponse(account, profiles, currentProfileId);
        set((state) => {
          state.user = user;
          state.profiles = profiles;
          state.currentProfileId = currentProfileId;
        });
      } catch (error) {
        throw error;
      }
    },

    setAuth: (isAuth: boolean) => {
      set({ isAuth });
    },

    setUser: (user: IUser | null) => {
      set({ user });
    },

    setProfiles: (profiles: IAuthResponse['profiles'], currentProfileId: string) => {
      const state = useAuthStore.getState();
      if (state.user) {
        const user = buildUserFromAuthResponse(state.user.account, profiles, currentProfileId);
        set({ user, profiles, currentProfileId });
      } else {
        set({ profiles, currentProfileId });
      }
    },
  })),
);
