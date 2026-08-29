import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '../services/userService';
import { profileSchema } from '../schemas/userSchema';
import type { IProfile, ICreateProfileRequest } from '../types/User';

export const PROFILES_QUERY_KEY = ['users', 'me', 'profiles'] as const;

export const useProfiles = () => {
  return useQuery<IProfile[]>({
    queryKey: PROFILES_QUERY_KEY,
    queryFn: async () => {
      const data = await userService.getMyProfiles();
      return (Array.isArray(data) ? data : []).map((p) => {
        const normalized = { ...p, _id: (p as IProfile)._id ?? (p as { id?: string }).id ?? '' };
        return profileSchema.parse(normalized) as IProfile;
      });
    },
  });
};

export const useCreateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: ICreateProfileRequest) => {
      const data = await userService.createProfile(payload);
      const raw =
        data && typeof data === 'object' && 'profile' in data
          ? ((data as { profile: IProfile }).profile ?? data)
          : data;
      const normalized = {
        rating: 0,
        xp: 0,
        completedDeals: 0,
        type: payload.type,
        ...raw,
        _id: raw._id ?? (raw as { id?: string }).id ?? '',
      };
      return profileSchema.parse(normalized) as IProfile;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROFILES_QUERY_KEY });
    },
  });
};
