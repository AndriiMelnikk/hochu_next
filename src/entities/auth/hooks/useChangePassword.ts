import { useMutation } from '@tanstack/react-query';
import { authService } from '../services/authService';
import type { IChangePasswordRequest } from '../types/requests/ChangePasswordRequest';

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (data: IChangePasswordRequest) => authService.changePassword(data),
  });
};
