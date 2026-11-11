'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLingui } from '@lingui/react';
import { toast } from 'sonner';
import { Check, Plus } from 'lucide-react';
import { useQueries, useQueryClient } from '@tanstack/react-query';
import { useProfiles } from '@/entities/user';
import {
  ALL_NOTIFICATION_CHANNELS,
  DEFAULT_NOTIFICATION_CHANNELS,
  NotificationCategory,
  NotificationChannel,
  notificationPreferenceService,
  useDeleteRequestSubscription,
  useRequestSubscriptions,
  useTelegramLinkStatus,
  type INewRequestsPreference,
  type INotificationPreferences,
  type IRequestSubscription,
  type IUpdateNotificationPreferencesRequest,
} from '@/entities/notification';
import {
  CategoryChipsSelect,
  RequestSubscriptionCard,
  RequestSubscriptionModal,
  TelegramConnectSection,
  ToggleRow,
} from '@/features/notifications';
import { Button, CityCombobox, Label, LoadingState, Pagination } from '@/ui-v2';

type ProfileType = 'buyer' | 'seller';

interface Topic {
  id: string;
  group: 'general' | 'buyer' | 'seller';
  /** До яких профілів застосовується (messages/reviews — до всіх). */
  profileType: ProfileType | 'all';
  /** Кілька внутрішніх категорій зведені в один перемикач. */
  categories: NotificationCategory[];
}

const TOPICS: Topic[] = [
  {
    id: 'messages',
    group: 'general',
    profileType: 'all',
    categories: [NotificationCategory.MESSAGES],
  },
  {
    id: 'reviews',
    group: 'general',
    profileType: 'all',
    categories: [NotificationCategory.REVIEWS, NotificationCategory.ACHIEVEMENTS],
  },
  {
    id: 'buyerRequests',
    group: 'buyer',
    profileType: 'buyer',
    categories: [NotificationCategory.REQUEST_UPDATES, NotificationCategory.MY_REQUEST_ACTIVITY],
  },
  {
    id: 'sellerProposals',
    group: 'seller',
    profileType: 'seller',
    categories: [NotificationCategory.MY_PROPOSAL_STATUS],
  },
  {
    id: 'newRequests',
    group: 'seller',
    profileType: 'seller',
    categories: [NotificationCategory.NEW_REQUESTS],
  },
];

const GROUPS = ['general', 'buyer', 'seller'] as const;

const prefsKey = (profileId: string) => ['notification-preferences', profileId] as const;

function Section({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) {
  return (
    <section className="space-y-1">
      <h3 className="text-lg font-[550] text-v2-ink">{title}</h3>
      {hint && <p className="text-sm text-v2-muted">{hint}</p>}
      <div className="divide-y divide-v2-border">{children}</div>
    </section>
  );
}

export default function NotificationSettingsContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const queryClient = useQueryClient();

  const { data: profiles = [], isLoading: isProfilesLoading } = useProfiles();
  const sellerProfile = profiles.find((p) => p.type === 'seller');
  const { data: telegramStatus } = useTelegramLinkStatus();
  const telegramLinked = telegramStatus?.linked ?? false;

  const prefsResults = useQueries({
    queries: profiles.map((p) => ({
      queryKey: prefsKey(p._id),
      queryFn: () => notificationPreferenceService.getByProfileId(p._id),
    })),
  });
  const prefsById: Record<string, INotificationPreferences | undefined> = {};
  profiles.forEach((p, i) => {
    prefsById[p._id] = prefsResults[i]?.data;
  });
  const prefsLoading = prefsResults.some((r) => r.isLoading);

  const [isSaving, setIsSaving] = useState(false);

  /** Оптимістично застосовує зміни до кожного профілю (один PATCH на профіль). */
  const apply = async (
    build: (
      profile: { _id: string; type: string },
      prefs: INotificationPreferences,
    ) => IUpdateNotificationPreferencesRequest | null,
  ) => {
    const jobs = profiles
      .map((p) => {
        const prefs = prefsById[p._id];
        const patch = prefs ? build(p, prefs) : null;
        return prefs && patch ? { p, prefs, patch } : null;
      })
      .filter((j): j is NonNullable<typeof j> => j !== null);
    if (jobs.length === 0) return;

    jobs.forEach(({ p, prefs, patch }) => {
      const next = { ...prefs } as Record<string, unknown>;
      for (const [key, value] of Object.entries(patch)) {
        next[key] = { ...(prefs as unknown as Record<string, object>)[key], ...value };
      }
      queryClient.setQueryData(prefsKey(p._id), next);
    });

    setIsSaving(true);
    try {
      await Promise.all(
        jobs.map(({ p, patch }) => notificationPreferenceService.update(p._id, patch)),
      );
    } catch {
      jobs.forEach(({ p, prefs }) => queryClient.setQueryData(prefsKey(p._id), prefs));
      toast.error(t('profile.notifications.saveError'));
    } finally {
      setIsSaving(false);
      jobs.forEach(({ p }) => void queryClient.invalidateQueries({ queryKey: prefsKey(p._id) }));
    }
  };

  const topicProfiles = (topic: Topic) =>
    profiles.filter((p) => topic.profileType === 'all' || p.type === topic.profileType);

  const topicEntries = (topic: Topic) =>
    topicProfiles(topic).flatMap((p) =>
      topic.categories.map((c) => prefsById[p._id]?.[c]).filter((v) => v !== undefined),
    );

  const topicEnabled = (topic: Topic) => {
    const entries = topicEntries(topic);
    return entries.length > 0 && entries.every((e) => e.enabled);
  };

  // Канали — глобальні: канал «увімкнений», якщо він є в усіх активних категоріях
  const enabledEntries = profiles.flatMap((p) =>
    Object.values(prefsById[p._id] ?? {}).filter((v) => v.enabled),
  );
  const hasEnabledTopics = enabledEntries.length > 0;
  const channelOn = (channel: NotificationChannel) =>
    hasEnabledTopics && enabledEntries.every((e) => e.channels.includes(channel));
  const currentChannels = ALL_NOTIFICATION_CHANNELS.filter((c) =>
    hasEnabledTopics ? channelOn(c) : DEFAULT_NOTIFICATION_CHANNELS.includes(c),
  );

  const toggleTopic = (topic: Topic, enabled: boolean) => {
    const channels = (
      currentChannels.length > 0 ? currentChannels : DEFAULT_NOTIFICATION_CHANNELS
    ).filter((c) => c !== NotificationChannel.TELEGRAM || telegramLinked);
    void apply((p, prefs) => {
      if (topic.profileType !== 'all' && p.type !== topic.profileType) return null;
      const patch: Record<string, unknown> = {};
      topic.categories.forEach((c) => {
        if (prefs[c]) patch[c] = { enabled, channels: enabled ? channels : [] };
      });
      return patch as IUpdateNotificationPreferencesRequest;
    });
  };

  const toggleChannel = (channel: NotificationChannel, on: boolean) => {
    void apply((_p, prefs) => {
      const patch: Record<string, unknown> = {};
      (Object.keys(prefs) as NotificationCategory[]).forEach((c) => {
        const entry = prefs[c];
        if (!entry?.enabled) return;
        const channels = on
          ? Array.from(new Set([...entry.channels, channel]))
          : entry.channels.filter((x) => x !== channel);
        patch[c] = { channels: channels.length > 0 ? channels : [NotificationChannel.IN_APP] };
      });
      return patch as IUpdateNotificationPreferencesRequest;
    });
  };

  if (isProfilesLoading || prefsLoading) {
    return <LoadingState variant="inline" />;
  }

  return (
    <div className="space-y-8">
      <Section
        title={t('profile.notifications.channels.title')}
        hint={t('profile.notifications.channels.hint')}
      >
        <div className="flex min-h-14 items-center gap-4 py-3">
          <div className="min-w-0 flex-1">
            <p className="text-base font-[500] leading-snug text-v2-ink">
              {t('profile.notifications.channels.in_app')}
            </p>
            <p className="mt-0.5 text-sm leading-snug text-v2-muted">
              {t('profile.notifications.channels.alwaysOn')}
            </p>
          </div>
          <span
            aria-hidden
            className="flex size-6 items-center justify-center rounded-full bg-v2-primary text-v2-on-primary"
          >
            <Check className="size-4" />
          </span>
        </div>
        <ToggleRow
          title={t('profile.notifications.channels.email')}
          description={t('profile.notifications.channels.emailHint')}
          checked={channelOn(NotificationChannel.EMAIL)}
          onCheckedChange={(on) => toggleChannel(NotificationChannel.EMAIL, on)}
          disabled={isSaving || !hasEnabledTopics}
        />
        <TelegramConnectSection
          checked={telegramLinked && channelOn(NotificationChannel.TELEGRAM)}
          onCheckedChange={(on) => toggleChannel(NotificationChannel.TELEGRAM, on)}
          disabled={isSaving || !hasEnabledTopics}
        />
      </Section>

      {GROUPS.map((group) => {
        const topics = TOPICS.filter((tp) => tp.group === group && topicProfiles(tp).length > 0);
        if (topics.length === 0) return null;
        return (
          <Section key={group} title={t(`profile.notifications.group.${group}`)}>
            {topics.map((topic) => (
              <ToggleRow
                key={topic.id}
                title={t(`profile.notifications.topic.${topic.id}`)}
                description={t(`profile.notifications.topic.${topic.id}.description`)}
                checked={topicEnabled(topic)}
                onCheckedChange={(on) => toggleTopic(topic, on)}
                disabled={isSaving}
              >
                {topic.id === 'newRequests' && sellerProfile && (
                  <NewRequestsFilters
                    value={prefsById[sellerProfile._id]?.[NotificationCategory.NEW_REQUESTS]}
                    onSave={(filters) =>
                      void apply((p) =>
                        p._id === sellerProfile._id
                          ? ({
                              [NotificationCategory.NEW_REQUESTS]: filters,
                            } as IUpdateNotificationPreferencesRequest)
                          : null,
                      )
                    }
                  />
                )}
              </ToggleRow>
            ))}
          </Section>
        );
      })}

      {sellerProfile && <SubscriptionsSection sellerProfileId={sellerProfile._id} />}
    </div>
  );
}

/** Фільтри «Нових запитів»: категорії та місто. Зберігаються з невеликою затримкою. */
function NewRequestsFilters({
  value,
  onSave,
}: {
  value?: INewRequestsPreference;
  onSave: (filters: Pick<INewRequestsPreference, 'categories' | 'location'>) => void;
}) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [local, setLocal] = useState<Pick<
    INewRequestsPreference,
    'categories' | 'location'
  > | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  if (!value) return null;
  const current = local ?? { categories: value.categories, location: value.location };

  const change = (next: Pick<INewRequestsPreference, 'categories' | 'location'>) => {
    setLocal(next);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      onSave(next);
      setLocal(null);
    }, 450);
  };

  return (
    <div className="mb-3 space-y-4 rounded-v2-lg bg-v2-surface-subtle p-4">
      <div className="space-y-1.5">
        <Label className="text-sm">{t('profile.notifications.subscriptions.categories')}</Label>
        <CategoryChipsSelect
          value={current.categories}
          onChange={(categories) => change({ ...current, categories })}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="new-requests-location" className="text-sm">
          {t('profile.edit.locationLabel')}
        </Label>
        <CityCombobox
          id="new-requests-location"
          value={current.location}
          onValueChange={(location) => change({ ...current, location })}
          placeholder={t('profile.edit.locationPlaceholder')}
          searchPlaceholder={t('profile.edit.locationSearch')}
          searchingLabel={t('profile.edit.locationSearching')}
          notFoundLabel={t('profile.edit.locationNotFound')}
        />
      </div>
    </div>
  );
}

function SubscriptionsSection({ sellerProfileId }: { sellerProfileId: string }) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data, isLoading } = useRequestSubscriptions(sellerProfileId, { page, pageSize });
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<IRequestSubscription | null>(null);
  const { mutateAsync: deleteSubscription, isPending: isDeleting } =
    useDeleteRequestSubscription(sellerProfileId);

  const subscriptions = data?.results ?? [];
  const totalPages = Math.max(1, Math.ceil((data?.count ?? 0) / pageSize));

  return (
    <section className="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-[550] text-v2-ink">
            {t('profile.notifications.subscriptions.title')}
          </h3>
          <p className="text-sm text-v2-muted">
            {t('profile.notifications.subscriptions.description')}
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0"
          onClick={() => {
            setEditing(null);
            setModalOpen(true);
          }}
        >
          <Plus className="mr-1.5 size-4" />
          {t('profile.notifications.subscriptions.add')}
        </Button>
      </div>

      {isLoading && <LoadingState variant="inline" />}
      {!isLoading && subscriptions.length === 0 && (
        <p className="text-sm text-v2-muted">{t('profile.notifications.subscriptions.empty')}</p>
      )}

      <div>
        {subscriptions.map((sub) => (
          <RequestSubscriptionCard
            key={sub._id}
            subscription={sub}
            onEdit={() => {
              setEditing(sub);
              setModalOpen(true);
            }}
            onDelete={async () => {
              try {
                await deleteSubscription(sub._id);
                toast.success(t('profile.notifications.subscriptions.deleteSuccess'));
              } catch {
                toast.error(t('profile.notifications.subscriptions.deleteError'));
              }
            }}
            isDeleting={isDeleting}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      )}

      <RequestSubscriptionModal
        sellerProfileId={sellerProfileId}
        subscription={editing}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSuccess={() => setEditing(null)}
      />
    </section>
  );
}
