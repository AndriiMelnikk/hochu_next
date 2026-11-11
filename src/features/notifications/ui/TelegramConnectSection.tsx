'use client';

import { useLingui } from '@lingui/react';
import { toast } from 'sonner';
import { ExternalLink } from 'lucide-react';
import {
  useCreateTelegramLinkToken,
  useTelegramLinkStatus,
  useUnlinkTelegram,
} from '@/entities/notification';
import { Button, LoadingState } from '@/ui-v2';
import { ToggleRow } from './ToggleRow';

/**
 * Рядок каналу Telegram: якщо бот не підключений — кнопка «Підключити»,
 * якщо підключений — звичайний перемикач і дрібні посилання «Оновити / Відвʼязати».
 */
export const TelegramConnectSection = ({
  checked,
  onCheckedChange,
  disabled,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
}) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const { data: status, isLoading, refetch, isFetching } = useTelegramLinkStatus();
  const { mutateAsync: createToken, isPending: isCreatingToken } = useCreateTelegramLinkToken();
  const { mutateAsync: unlink, isPending: isUnlinking } = useUnlinkTelegram();

  const linked = status?.linked ?? false;

  const handleConnect = async () => {
    try {
      const token = await createToken();
      window.open(token.deepLink, '_blank', 'noopener,noreferrer');
      toast.success(t('profile.notifications.telegram.openBotSuccess'));
      window.setTimeout(() => {
        void refetch();
      }, 2500);
    } catch {
      toast.error(t('profile.notifications.telegram.linkError'));
    }
  };

  const handleUnlink = async () => {
    try {
      await unlink();
      toast.success(t('profile.notifications.telegram.unlinkSuccess'));
    } catch {
      toast.error(t('profile.notifications.telegram.unlinkError'));
    }
  };

  if (isLoading) return <LoadingState variant="inline" />;

  if (!linked) {
    return (
      <div className="flex min-h-14 items-center gap-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="text-base font-[500] leading-snug text-v2-ink">
            {t('profile.notifications.telegram.title')}
          </p>
          <p className="mt-0.5 text-sm leading-snug text-v2-muted">
            {t('profile.notifications.channels.telegramHint')}
          </p>
        </div>
        <Button type="button" size="sm" onClick={handleConnect} disabled={isCreatingToken}>
          <ExternalLink className="mr-1.5 size-4" />
          {isCreatingToken
            ? t('profile.notifications.telegram.connecting')
            : t('profile.notifications.channels.connect')}
        </Button>
      </div>
    );
  }

  return (
    <div>
      <ToggleRow
        title={t('profile.notifications.telegram.title')}
        description={status?.telegramUsername ? `@${status.telegramUsername}` : undefined}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
      />
      <div className="-mt-1 flex gap-4 pb-2 text-sm">
        <button
          type="button"
          className="text-v2-primary hover:underline disabled:opacity-50"
          onClick={() => void refetch()}
          disabled={isFetching}
        >
          {t('profile.notifications.telegram.refresh')}
        </button>
        <button
          type="button"
          className="text-v2-danger hover:underline disabled:opacity-50"
          onClick={handleUnlink}
          disabled={isUnlinking}
        >
          {t('profile.notifications.telegram.unlink')}
        </button>
      </div>
    </div>
  );
};
