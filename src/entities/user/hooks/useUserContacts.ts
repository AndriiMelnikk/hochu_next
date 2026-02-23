import { useQuery } from '@tanstack/react-query';
import { userService } from '../services/userService';

export const useUserContacts = (
  id: string | number | undefined,
  options?: { enabled?: boolean },
) => {
  return useQuery({
    queryKey: ['users', 'contacts', id],
    queryFn: async () => {
      if (!id) throw new Error('User ID is required');
      const data = await userService.getContacts(id);
      return data;
    },
    enabled: !!id && options?.enabled !== false,
  });
};
