import { useMutation } from '@tanstack/react-query';
import { telegramLinkService } from '../services/telegramLinkService';

export const useCreateTelegramLinkToken = () => {
  return useMutation({
    mutationFn: () => telegramLinkService.createLinkToken(),
  });
};
