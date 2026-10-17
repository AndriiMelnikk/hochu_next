import { useQuery } from '@tanstack/react-query';
import { telegramLinkService } from '../services/telegramLinkService';
import type { ITelegramLinkStatus } from '../types/TelegramLink';

export const TELEGRAM_LINK_QUERY_KEY = ['telegram-link-status'] as const;

const UNLINKED: ITelegramLinkStatus = { linked: false };

export const useTelegramLinkStatus = (enabled = true) => {
  return useQuery({
    queryKey: TELEGRAM_LINK_QUERY_KEY,
    queryFn: async () => {
      try {
        return await telegramLinkService.getStatus();
      } catch {
        // Backend not ready yet — treat as unlinked so settings UI still works.
        return UNLINKED;
      }
    },
    enabled,
    staleTime: 30_000,
    retry: false,
  });
};
