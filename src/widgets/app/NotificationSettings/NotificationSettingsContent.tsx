'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLingui } from '@lingui/react';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';
import { useProfiles } from '@/entities/user';
import {
  NotificationCategory,
  notificationPreferenceService,
  useDeleteRequestSubscription,
  useNotificationPreferences,
  useRequestSubscriptions,
  useTelegramLinkStatus,
  useUpdateNotificationPreferences,
  type ICategoryPreference,
  type INewRequestsPreference,
  type IRequestSubscription,
  type IUpdateNotificationPreferencesRequest,
} from '@/entities/notification';
import { useQueryClient } from '@tanstack/react-query';
import {
  NewRequestsPreferenceForm,
  NotificationPreferencesSection,
  RequestSubscriptionCard,
  RequestSubscriptionModal,
  TelegramConnectSection,
} from '@/features/notifications';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion';
import { Button } from '@/shared/ui/button';
import { Loading } from '@/shared/ui/loading';
import { UniversalPagination } from '@/shared/ui/universal-pagination';

const BUYER_CATEGORIES = [
  NotificationCategory.REQUEST_UPDATES,
  NotificationCategory.MY_REQUEST_ACTIVITY,
  NotificationCategory.REVIEWS,
  NotificationCategory.ACHIEVEMENTS,
] as const;

const SELLER_CATEGORIES = [
  NotificationCategory.MY_PROPOSAL_STATUS,
  NotificationCategory.REVIEWS,
  NotificationCategory.ACHIEVEMENTS,
] as const;

export default function NotificationSettingsContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const { data: profiles = [], isLoading: isProfilesLoading } = useProfiles();
  const buyerProfile = profiles.find((p) => p.type === 'buyer');
  const sellerProfile = profiles.find((p) => p.type === 'seller');
  const { data: telegramStatus } = useTelegramLinkStatus();
  const telegramLinked = telegramStatus?.linked ?? false;

  const [subscriptionPage, setSubscriptionPage] = useState(1);
  const subscriptionPageSize = 10;

  const { data: subscriptionsData, isLoading: isSubscriptionsLoading } = useRequestSubscriptions(
    sellerProfile?._id,
    { page: subscriptionPage, pageSize: subscriptionPageSize },
  );

  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState<IRequestSubscription | null>(null);

  const { mutateAsync: deleteSubscription, isPending: isDeleting } = useDeleteRequestSubscription(
    sellerProfile?._id ?? '',
  );

  const subscriptions = subscriptionsData?.results ?? [];
  const subscriptionsTotalPages = Math.max(
    1,
    Math.ceil((subscriptionsData?.count ?? 0) / subscriptionPageSize),
  );

  if (isProfilesLoading) {
    return <Loading variant="inline" />;
  }

  return (
    <div className="space-y-3">
      <div className="rounded-lg border px-4 py-3">
        <TelegramConnectSection />
      </div>

      <Accordion type="multiple" defaultValue={['account']} className="rounded-lg border px-4">
        <AccordionItem value="account">
          <AccordionTrigger className="py-3 text-sm hover:no-underline">
            {t('profile.notifications.sections.account')}
          </AccordionTrigger>
          <AccordionContent className="pb-3 pt-0">
            <AccountMessagesSection profiles={profiles} telegramLinked={telegramLinked} />
          </AccordionContent>
        </AccordionItem>

        {buyerProfile && (
          <AccordionItem value="buyer">
            <AccordionTrigger className="py-3 text-sm hover:no-underline">
              {t('profile.notifications.sections.buyer')}
            </AccordionTrigger>
            <AccordionContent className="pb-3 pt-0">
              <ProfilePreferencesSection
                profileId={buyerProfile._id}
                categories={BUYER_CATEGORIES}
                telegramLinked={telegramLinked}
              />
            </AccordionContent>
          </AccordionItem>
        )}

        {sellerProfile && (
          <AccordionItem value="seller">
            <AccordionTrigger className="py-3 text-sm hover:no-underline">
              {t('profile.notifications.sections.seller')}
            </AccordionTrigger>
            <AccordionContent className="pb-3 pt-0">
              <SellerPreferencesSection
                profileId={sellerProfile._id}
                categories={SELLER_CATEGORIES}
                telegramLinked={telegramLinked}
              />
            </AccordionContent>
          </AccordionItem>
        )}

        {sellerProfile && (
          <AccordionItem value="subscriptions" className="border-b-0">
            <AccordionTrigger className="py-3 text-sm hover:no-underline">
              <span className="flex flex-1 items-center justify-between gap-3 pr-2 text-left">
                {t('profile.notifications.subscriptions.title')}
                {subscriptionsData?.count != null && subscriptionsData.count > 0 && (
                  <span className="text-xs font-normal text-muted-foreground">
                    {subscriptionsData.count}
                  </span>
                )}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-3 pt-0">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs text-muted-foreground">
                    {t('profile.notifications.subscriptions.description')}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="shrink-0"
                    onClick={() => {
                      setEditingSubscription(null);
                      setSubscriptionModalOpen(true);
                    }}
                  >
                    <Plus className="mr-1.5 h-3.5 w-3.5" />
                    {t('profile.notifications.subscriptions.add')}
                  </Button>
                </div>

                {isSubscriptionsLoading && <Loading variant="inline" />}

                {!isSubscriptionsLoading && subscriptions.length === 0 && (
                  <p className="py-1 text-sm text-muted-foreground">
                    {t('profile.notifications.subscriptions.empty')}
                  </p>
                )}

                <div>
                  {subscriptions.map((sub) => (
                    <RequestSubscriptionCard
                      key={sub._id}
                      subscription={sub}
                      onEdit={() => {
                        setEditingSubscription(sub);
                        setSubscriptionModalOpen(true);
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

                {subscriptionsTotalPages > 1 && (
                  <UniversalPagination
                    currentPage={subscriptionPage}
                    totalPages={subscriptionsTotalPages}
                    onPageChange={setSubscriptionPage}
                  />
                )}
              </div>

              <RequestSubscriptionModal
                sellerProfileId={sellerProfile._id}
                subscription={editingSubscription}
                open={subscriptionModalOpen}
                onOpenChange={setSubscriptionModalOpen}
                onSuccess={() => setEditingSubscription(null)}
              />
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
}

function PreferenceList({ children }: { children: ReactNode }) {
  return <div className="divide-y">{children}</div>;
}

function AccountMessagesSection({
  profiles,
  telegramLinked,
}: {
  profiles: { _id: string }[];
  telegramLinked: boolean;
}) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const queryClient = useQueryClient();
  const firstProfileId = profiles[0]?._id;
  const { data: prefs, isLoading } = useNotificationPreferences(firstProfileId);
  const [localMessages, setLocalMessages] = useState<ICategoryPreference | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const messagesValue = localMessages ?? prefs?.[NotificationCategory.MESSAGES];

  const saveMessages = async (next: ICategoryPreference) => {
    if (profiles.length === 0) return;
    setLocalMessages(next);
    setIsSaving(true);
    try {
      await Promise.all(
        profiles.map((profile) =>
          notificationPreferenceService.update(profile._id, {
            [NotificationCategory.MESSAGES]: next,
          }),
        ),
      );
      await Promise.all(
        profiles.map((profile) =>
          queryClient.invalidateQueries({ queryKey: ['notification-preferences', profile._id] }),
        ),
      );
      setLocalMessages(null);
    } catch {
      setLocalMessages(null);
      toast.error(t('profile.notifications.saveError'));
    } finally {
      setIsSaving(false);
    }
  };

  if (!firstProfileId) return null;
  if (isLoading) return <Loading variant="inline" />;
  if (!messagesValue) return null;

  return (
    <PreferenceList>
      <NotificationPreferencesSection
        categoryKey={NotificationCategory.MESSAGES}
        value={messagesValue}
        onChange={saveMessages}
        disabled={isSaving}
        telegramLinked={telegramLinked}
      />
    </PreferenceList>
  );
}

function ProfilePreferencesSection({
  profileId,
  categories,
  telegramLinked,
}: {
  profileId: string;
  categories: readonly NotificationCategory[];
  telegramLinked: boolean;
}) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: prefs, isLoading } = useNotificationPreferences(profileId);
  const { mutateAsync: updatePrefs, isPending } = useUpdateNotificationPreferences(profileId);
  const [localPrefs, setLocalPrefs] = useState<Partial<Record<NotificationCategory, ICategoryPreference>>>(
    {},
  );

  const saveCategory = async (key: NotificationCategory, value: ICategoryPreference) => {
    setLocalPrefs((prev) => ({ ...prev, [key]: value }));
    try {
      await updatePrefs({ [key]: value } as IUpdateNotificationPreferencesRequest);
      setLocalPrefs((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    } catch {
      setLocalPrefs((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
      toast.error(t('profile.notifications.saveError'));
    }
  };

  if (isLoading) return <Loading variant="inline" />;

  return (
    <PreferenceList>
      {categories.map((categoryKey) => {
        const value =
          localPrefs[categoryKey] ?? (prefs?.[categoryKey] as ICategoryPreference | undefined);
        if (!value) return null;
        return (
          <NotificationPreferencesSection
            key={categoryKey}
            categoryKey={categoryKey}
            value={value}
            onChange={(v) => void saveCategory(categoryKey, v)}
            disabled={isPending}
            telegramLinked={telegramLinked}
          />
        );
      })}
    </PreferenceList>
  );
}

function SellerPreferencesSection({
  profileId,
  categories,
  telegramLinked,
}: {
  profileId: string;
  categories: readonly NotificationCategory[];
  telegramLinked: boolean;
}) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: prefs, isLoading } = useNotificationPreferences(profileId);
  const { mutateAsync: updatePrefs, isPending } = useUpdateNotificationPreferences(profileId);
  const [localNewRequests, setLocalNewRequests] = useState<INewRequestsPreference | null>(null);
  const [localPrefs, setLocalPrefs] = useState<Partial<Record<NotificationCategory, ICategoryPreference>>>(
    {},
  );
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const serverNewRequests = prefs?.[NotificationCategory.NEW_REQUESTS];
  const newRequestsValue = localNewRequests ?? serverNewRequests;

  useEffect(() => {
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, []);

  const savePatch = async (payload: IUpdateNotificationPreferencesRequest) => {
    try {
      await updatePrefs(payload);
    } catch {
      toast.error(t('profile.notifications.saveError'));
      throw new Error('save failed');
    }
  };

  const handleNewRequestsChange = (next: INewRequestsPreference) => {
    setLocalNewRequests(next);
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      void savePatch({ [NotificationCategory.NEW_REQUESTS]: next })
        .then(() => setLocalNewRequests(null))
        .catch(() => setLocalNewRequests(null));
    }, 450);
  };

  const saveCategory = async (key: NotificationCategory, value: ICategoryPreference) => {
    setLocalPrefs((prev) => ({ ...prev, [key]: value }));
    try {
      await savePatch({ [key]: value });
      setLocalPrefs((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    } catch {
      setLocalPrefs((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  if (isLoading) return <Loading variant="inline" />;

  return (
    <PreferenceList>
      {newRequestsValue && (
        <NewRequestsPreferenceForm
          value={newRequestsValue}
          onChange={handleNewRequestsChange}
          disabled={isPending}
          telegramLinked={telegramLinked}
        />
      )}
      {categories.map((categoryKey) => {
        const value =
          localPrefs[categoryKey] ?? (prefs?.[categoryKey] as ICategoryPreference | undefined);
        if (!value) return null;
        return (
          <NotificationPreferencesSection
            key={categoryKey}
            categoryKey={categoryKey}
            value={value}
            onChange={(v) => void saveCategory(categoryKey, v)}
            disabled={isPending}
            telegramLinked={telegramLinked}
          />
        );
      })}
    </PreferenceList>
  );
}
