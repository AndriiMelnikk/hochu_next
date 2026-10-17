import { useMutation, useQueryClient } from '@tanstack/react-query';
import { telegramLinkService } from '../services/telegramLinkService';
import { TELEGRAM_LINK_QUERY_KEY } from './useTelegramLinkStatus';

export const useUnlinkTelegram = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => telegramLinkService.unlink(),
    onSuccess: (status) => {
      queryClient.setQueryData(TELEGRAM_LINK_QUERY_KEY, status);
    },
  });
};
