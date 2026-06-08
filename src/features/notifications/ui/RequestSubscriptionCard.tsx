'use client';

import { useLingui } from '@lingui/react';
import { Pencil, Trash2 } from 'lucide-react';
import type { IRequestSubscription } from '@/entities/notification';
import { useCategories } from '@/entities/category';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';

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

  return (
    <Card className={!subscription.enabled ? 'opacity-60' : undefined}>
      <CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
        <CardTitle className="text-base">
          {subscription.enabled
            ? t('profile.notifications.subscriptions.active')
            : t('profile.notifications.subscriptions.inactive')}
        </CardTitle>
        <div className="flex gap-1">
          <Button type="button" variant="ghost" size="icon" onClick={onEdit}>
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onDelete}
            disabled={isDeleting}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {categoryLabels.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {categoryLabels.map((label) => (
              <Badge key={label} variant="secondary">
                {label}
              </Badge>
            ))}
          </div>
        )}
        {subscription.location && (
          <p>
            <span className="text-muted-foreground">{t('profile.edit.locationLabel')}:</span>{' '}
            {subscription.location}
          </p>
        )}
        {(subscription.budgetMin != null || subscription.budgetMax != null) && (
          <p>
            <span className="text-muted-foreground">{t('profile.notifications.subscriptions.budget')}:</span>{' '}
            {subscription.budgetMin ?? '—'} – {subscription.budgetMax ?? '—'}
          </p>
        )}
        <p className="text-muted-foreground">
          {subscription.channels.map((c) => t(`profile.notifications.channels.${c}`)).join(', ')}
        </p>
      </CardContent>
    </Card>
  );
};
