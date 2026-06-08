'use client';

import { useEffect, useState } from 'react';
import { useLingui } from '@lingui/react';
import { toast } from 'sonner';
import type { IRequestSubscription } from '@/entities/notification';
import {
  ALL_NOTIFICATION_CHANNELS,
  useCreateRequestSubscription,
  useUpdateRequestSubscription,
} from '@/entities/notification';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/shared/ui/dialog';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Switch } from '@/shared/ui/switch';
import { CityCombobox } from '@/shared/ui/city-combobox';
import { CategoryChipsSelect } from './CategoryChipsSelect';

interface RequestSubscriptionModalProps {
  sellerProfileId: string;
  subscription?: IRequestSubscription | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const RequestSubscriptionModal = ({
  sellerProfileId,
  subscription,
  open,
  onOpenChange,
  onSuccess,
}: RequestSubscriptionModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const isEdit = !!subscription;

  const [categories, setCategories] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [budgetMin, setBudgetMin] = useState('');
  const [budgetMax, setBudgetMax] = useState('');
  const [enabled, setEnabled] = useState(true);

  const { mutateAsync: createSubscription, isPending: isCreating } =
    useCreateRequestSubscription(sellerProfileId);
  const { mutateAsync: updateSubscription, isPending: isUpdating } =
    useUpdateRequestSubscription(sellerProfileId);

  useEffect(() => {
    if (!open) return;
    setCategories(subscription?.categories ?? []);
    setLocation(subscription?.location ?? '');
    setBudgetMin(subscription?.budgetMin != null ? String(subscription.budgetMin) : '');
    setBudgetMax(subscription?.budgetMax != null ? String(subscription.budgetMax) : '');
    setEnabled(subscription?.enabled ?? true);
  }, [open, subscription]);

  const handleSubmit = async () => {
    const payload = {
      categories,
      location: location || null,
      budgetMin: budgetMin ? Number(budgetMin) : null,
      budgetMax: budgetMax ? Number(budgetMax) : null,
      enabled,
      channels: enabled ? ALL_NOTIFICATION_CHANNELS : [],
    };

    try {
      if (isEdit && subscription) {
        await updateSubscription({ subscriptionId: subscription._id, payload });
        toast.success(t('profile.notifications.subscriptions.updateSuccess'));
      } else {
        await createSubscription(payload);
        toast.success(t('profile.notifications.subscriptions.createSuccess'));
      }
      onSuccess?.();
      onOpenChange(false);
    } catch {
      toast.error(t('profile.notifications.subscriptions.saveError'));
    }
  };

  const isPending = isCreating || isUpdating;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEdit
              ? t('profile.notifications.subscriptions.editTitle')
              : t('profile.notifications.subscriptions.createTitle')}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="flex items-center justify-between">
            <Label>{t('profile.notifications.subscriptions.enabled')}</Label>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </div>

          <div className="space-y-2">
            <Label>{t('profile.notifications.subscriptions.categories')}</Label>
            <CategoryChipsSelect value={categories} onChange={setCategories} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subscription-location">{t('profile.edit.locationLabel')}</Label>
            <CityCombobox
              id="subscription-location"
              value={location || null}
              onValueChange={(city) => setLocation(city ?? '')}
              placeholder={t('profile.edit.locationPlaceholder')}
              searchPlaceholder={t('profile.edit.locationSearch')}
              searchingLabel={t('profile.edit.locationSearching')}
              notFoundLabel={t('profile.edit.locationNotFound')}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="budget-min">
                {t('profile.notifications.subscriptions.budgetMin')}
              </Label>
              <Input
                id="budget-min"
                type="number"
                min={0}
                value={budgetMin}
                onChange={(e) => setBudgetMin(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget-max">
                {t('profile.notifications.subscriptions.budgetMax')}
              </Label>
              <Input
                id="budget-max"
                type="number"
                min={0}
                value={budgetMax}
                onChange={(e) => setBudgetMax(e.target.value)}
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            {t('common.cancel')}
          </Button>
          <Button type="button" onClick={handleSubmit} disabled={isPending}>
            {isPending ? t('profile.edit.submitting') : t('profile.edit.submit')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
