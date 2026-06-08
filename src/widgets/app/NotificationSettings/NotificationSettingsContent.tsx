'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';
import { useProfiles } from '@/entities/user';
import {
  NotificationCategory,
  channelsForEnabled,
  notificationPreferenceService,
  useDeleteRequestSubscription,
  useNotificationPreferences,
  useRequestSubscriptions,
  useUpdateNotificationPreferences,
  type ICategoryPreference,
  type INewRequestsPreference,
  type INotificationPreferences,
  type IRequestSubscription,
} from '@/entities/notification';
import { useQueryClient } from '@tanstack/react-query';
import {
  NewRequestsPreferenceForm,
  NotificationPreferencesSection,
  RequestSubscriptionCard,
  RequestSubscriptionModal,
} from '@/features/notifications';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
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
    <div className="space-y-6">
      <AccountMessagesSection profiles={profiles} />

      {buyerProfile && (
        <ProfilePreferencesSection
          title={t('profile.notifications.sections.buyer')}
          description={t('profile.notifications.sections.buyerDescription')}
          profileId={buyerProfile._id}
          categories={BUYER_CATEGORIES}
        />
      )}

      {sellerProfile && (
        <>
          <SellerPreferencesSection profileId={sellerProfile._id} categories={SELLER_CATEGORIES} />

          <Card>
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle>{t('profile.notifications.subscriptions.title')}</CardTitle>
                <CardDescription>
                  {t('profile.notifications.subscriptions.description')}
                </CardDescription>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setEditingSubscription(null);
                  setSubscriptionModalOpen(true);
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                {t('profile.notifications.subscriptions.add')}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {isSubscriptionsLoading && <Loading variant="inline" />}

              {!isSubscriptionsLoading && subscriptions.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  {t('profile.notifications.subscriptions.empty')}
                </p>
              )}

              <div className="grid gap-3">
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
                  onPageChange={(p) => {
                    setSubscriptionPage(p);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              )}
            </CardContent>
          </Card>

          {sellerProfile && (
            <RequestSubscriptionModal
              sellerProfileId={sellerProfile._id}
              subscription={editingSubscription}
              open={subscriptionModalOpen}
              onOpenChange={setSubscriptionModalOpen}
              onSuccess={() => setEditingSubscription(null)}
            />
          )}
        </>
      )}
    </div>
  );
}

function AccountMessagesSection({ profiles }: { profiles: { _id: string }[] }) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const queryClient = useQueryClient();
  const firstProfileId = profiles[0]?._id;
  const { data: prefs, isLoading } = useNotificationPreferences(firstProfileId);

  const [localMessages, setLocalMessages] = useState<ICategoryPreference | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const messagesValue = localMessages ?? prefs?.[NotificationCategory.MESSAGES];

  const saveMessages = async () => {
    if (!localMessages || profiles.length === 0) return;
    setIsSaving(true);
    try {
      const messagesPayload = {
        ...localMessages,
        channels: channelsForEnabled(localMessages.enabled),
      };
      await Promise.all(
        profiles.map((profile) =>
          notificationPreferenceService.update(profile._id, {
            [NotificationCategory.MESSAGES]: messagesPayload,
          }),
        ),
      );
      await Promise.all(
        profiles.map((profile) =>
          queryClient.invalidateQueries({ queryKey: ['notification-preferences', profile._id] }),
        ),
      );
      toast.success(t('profile.notifications.saveSuccess'));
      setLocalMessages(null);
    } catch {
      toast.error(t('profile.notifications.saveError'));
    } finally {
      setIsSaving(false);
    }
  };

  if (!firstProfileId) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('profile.notifications.sections.account')}</CardTitle>
        <CardDescription>{t('profile.notifications.sections.accountDescription')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading && <Loading variant="inline" />}
        {messagesValue && (
          <>
            <NotificationPreferencesSection
              categoryKey={NotificationCategory.MESSAGES}
              value={messagesValue}
              onChange={setLocalMessages}
              disabled={isSaving}
            />
            <Button type="button" onClick={saveMessages} disabled={isSaving || !localMessages}>
              {isSaving ? t('profile.edit.submitting') : t('profile.edit.submit')}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

interface ProfilePreferencesSectionProps {
  title: string;
  description: string;
  profileId: string;
  categories: readonly NotificationCategory[];
}

function ProfilePreferencesSection({
  title,
  description,
  profileId,
  categories,
}: ProfilePreferencesSectionProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: prefs, isLoading } = useNotificationPreferences(profileId);
  const { mutateAsync: updatePrefs, isPending } = useUpdateNotificationPreferences(profileId);

  const [localPrefs, setLocalPrefs] = useState<Partial<INotificationPreferences>>({});

  const getCategoryValue = (key: NotificationCategory): ICategoryPreference | undefined => {
    const local = localPrefs[key] as ICategoryPreference | undefined;
    if (local) return local;
    return prefs?.[key] as ICategoryPreference | undefined;
  };

  const handleSave = async () => {
    if (Object.keys(localPrefs).length === 0) return;
    try {
      await updatePrefs(localPrefs);
      toast.success(t('profile.notifications.saveSuccess'));
      setLocalPrefs({});
    } catch {
      toast.error(t('profile.notifications.saveError'));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading && <Loading variant="inline" />}
        {categories.map((categoryKey) => {
          const value = getCategoryValue(categoryKey);
          if (!value) return null;
          return (
            <NotificationPreferencesSection
              key={categoryKey}
              categoryKey={categoryKey}
              value={value}
              onChange={(v) => setLocalPrefs((prev) => ({ ...prev, [categoryKey]: v }))}
              disabled={isPending}
            />
          );
        })}
        <Button
          type="button"
          onClick={handleSave}
          disabled={isPending || Object.keys(localPrefs).length === 0}
        >
          {isPending ? t('profile.edit.submitting') : t('profile.edit.submit')}
        </Button>
      </CardContent>
    </Card>
  );
}

function SellerPreferencesSection({
  profileId,
  categories,
}: {
  profileId: string;
  categories: readonly NotificationCategory[];
}) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: prefs, isLoading } = useNotificationPreferences(profileId);
  const { mutateAsync: updatePrefs, isPending } = useUpdateNotificationPreferences(profileId);

  const [localNewRequests, setLocalNewRequests] = useState<INewRequestsPreference | null>(null);
  const [localPrefs, setLocalPrefs] = useState<Partial<INotificationPreferences>>({});

  const newRequestsValue = localNewRequests ?? prefs?.[NotificationCategory.NEW_REQUESTS];

  const getCategoryValue = (key: NotificationCategory): ICategoryPreference | undefined => {
    const local = localPrefs[key] as ICategoryPreference | undefined;
    if (local) return local;
    return prefs?.[key] as ICategoryPreference | undefined;
  };

  const hasChanges = localNewRequests !== null || Object.keys(localPrefs).length > 0;

  const handleSave = async () => {
    const payload: Partial<INotificationPreferences> = { ...localPrefs };
    if (localNewRequests) {
      payload[NotificationCategory.NEW_REQUESTS] = localNewRequests;
    }
    if (Object.keys(payload).length === 0) return;
    try {
      await updatePrefs(payload);
      toast.success(t('profile.notifications.saveSuccess'));
      setLocalNewRequests(null);
      setLocalPrefs({});
    } catch {
      toast.error(t('profile.notifications.saveError'));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('profile.notifications.sections.seller')}</CardTitle>
        <CardDescription>{t('profile.notifications.sections.sellerDescription')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading && <Loading variant="inline" />}
        {newRequestsValue && (
          <NewRequestsPreferenceForm
            value={newRequestsValue}
            onChange={setLocalNewRequests}
            disabled={isPending}
          />
        )}
        {categories.map((categoryKey) => {
          const value = getCategoryValue(categoryKey);
          if (!value) return null;
          return (
            <NotificationPreferencesSection
              key={categoryKey}
              categoryKey={categoryKey}
              value={value}
              onChange={(v) => setLocalPrefs((prev) => ({ ...prev, [categoryKey]: v }))}
              disabled={isPending}
            />
          );
        })}
        <Button type="button" onClick={handleSave} disabled={isPending || !hasChanges}>
          {isPending ? t('profile.edit.submitting') : t('profile.edit.submit')}
        </Button>
      </CardContent>
    </Card>
  );
}
