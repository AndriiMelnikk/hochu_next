import { useQuery } from '@tanstack/react-query';
import { userService } from '../services/userService';
import { profileSchema, userSchema } from '../schemas/userSchema';
import type { IUser, IProfile } from '../types/User';

export const useUser = (id: string | number | undefined) => {
  return useQuery<IProfile>({
    queryKey: ['users', 'profile', id],
    queryFn: async () => {
      if (!id) throw new Error('User ID is required');
      const data = await userService.get(id);
      return profileSchema.parse(data) as IProfile;
    },
    enabled: !!id,
  });
};

export const useMe = () => {
  return useQuery<IUser>({
    queryKey: ['users', 'me'],
    queryFn: async () => {
      const data = await userService.getMe();
      return userSchema.parse(data) as IUser;
    },
    retry: (failureCount, error) => {
      const status = (error as { response?: { status?: number } })?.response?.status;
      if (status === 401) return false;
      return failureCount < 1;
    },
  });
};
