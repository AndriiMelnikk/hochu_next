'use client';

import { useLingui } from '@lingui/react';
import { toast } from 'sonner';
import { ExternalLink, Unlink } from 'lucide-react';
import {
  useCreateTelegramLinkToken,
  useTelegramLinkStatus,
  useUnlinkTelegram,
} from '@/entities/notification';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';
import { Loading } from '@/shared/ui/loading';

export const TelegramConnectSection = () => {
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

  if (isLoading) {
    return <Loading variant="inline" />;
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 space-y-0.5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-medium">{t('profile.notifications.telegram.title')}</p>
          <Badge variant={linked ? 'success' : 'secondary'}>
            {linked
              ? t('profile.notifications.telegram.linked')
              : t('profile.notifications.telegram.notLinked')}
          </Badge>
          {isFetching && !isLoading && <Loading variant="inline" />}
        </div>
        <p className="text-xs text-muted-foreground">
          {linked && status?.telegramUsername
            ? `@${status.telegramUsername}`
            : t('profile.notifications.telegram.description')}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 shrink-0">
        {linked ? (
          <>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => void refetch()}
              disabled={isFetching}
            >
              {t('profile.notifications.telegram.refresh')}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleUnlink}
              disabled={isUnlinking}
              className="text-destructive hover:text-destructive"
            >
              <Unlink className="mr-1.5 h-3.5 w-3.5" />
              {t('profile.notifications.telegram.unlink')}
            </Button>
          </>
        ) : (
          <Button type="button" size="sm" onClick={handleConnect} disabled={isCreatingToken}>
            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
            {isCreatingToken
              ? t('profile.notifications.telegram.connecting')
              : t('profile.notifications.telegram.connect')}
          </Button>
        )}
      </div>
    </div>
  );
};
