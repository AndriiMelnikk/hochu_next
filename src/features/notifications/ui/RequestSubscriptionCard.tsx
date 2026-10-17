'use client';

import { useLingui } from '@lingui/react';
import { Pencil, Trash2 } from 'lucide-react';
import type { IRequestSubscription } from '@/entities/notification';
import { useCategories } from '@/entities/category';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';
import { cn } from '@/lib/utils';

interface RequestSubscriptionCardProps {
  subscription: IRequestSubscription;
  onEdit: () => void;
  onDelete: () => void;
  isDeleting?: boolean;
}

export const RequestSubscriptionCard = ({
  subscription,
  onEdit,
  onDelete,
  isDeleting,
}: RequestSubscriptionCardProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: categories = [] } = useCategories();
  const categoriesById = new Map(categories.map((cat) => [cat._id, cat.title]));

  const categoryLabels = subscription.categories.map((id) => categoriesById.get(id) ?? id);
  const metaParts = [
    subscription.location,
    subscription.budgetMin != null || subscription.budgetMax != null
      ? `${subscription.budgetMin ?? '—'} – ${subscription.budgetMax ?? '—'}`
      : null,
  ].filter(Boolean);

  return (
    <div
      className={cn(
        'flex items-start justify-between gap-3 py-3 border-b last:border-b-0',
        !subscription.enabled && 'opacity-60',
      )}
    >
      <div className="min-w-0 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-medium">
            {subscription.enabled
              ? t('profile.notifications.subscriptions.active')
              : t('profile.notifications.subscriptions.inactive')}
          </p>
          {subscription.channels.map((channel) => (
            <Badge key={channel} variant="outline" className="font-normal">
              {t(`profile.notifications.channels.${channel}`)}
            </Badge>
          ))}
        </div>
        {categoryLabels.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {categoryLabels.map((label) => (
              <Badge key={label} variant="secondary" className="font-normal">
                {label}
              </Badge>
            ))}
          </div>
        )}
        {metaParts.length > 0 && (
          <p className="text-xs text-muted-foreground">{metaParts.join(' · ')}</p>
        )}
      </div>
      <div className="flex shrink-0 gap-0.5">
        <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={onEdit}>
          <Pencil className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-destructive hover:text-destructive"
          onClick={onDelete}
          disabled={isDeleting}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
