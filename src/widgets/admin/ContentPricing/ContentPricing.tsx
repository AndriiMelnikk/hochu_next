'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { adminPricingPlans, type IAdminPricingPlan } from '@/entities/admin';
import { PermissionGate } from '@/features/admin';
import {
  Badge,
  Heading,
  Button,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-v2';

export function ContentPricing() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [items, setItems] = useState<IAdminPricingPlan[]>(adminPricingPlans);

  return (
    <section className="space-y-6">
      <header>
        <Heading level="title" as="h1">
          {t('admin.content.pricing.title')}
        </Heading>
        <p className="mt-1 text-v2-muted">{t('admin.content.pricing.description')}</p>
      </header>
      <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('admin.content.pricing.table.name')}</TableHead>
              <TableHead>{t('admin.content.pricing.table.price')}</TableHead>
              <TableHead>{t('admin.content.pricing.table.period')}</TableHead>
              <TableHead>{t('admin.content.pricing.table.active')}</TableHead>
              <TableHead>{t('admin.content.table.actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((plan) => (
              <TableRow key={plan.id}>
                <TableCell className="font-medium">{plan.name}</TableCell>
                <TableCell>
                  {plan.price} {t('admin.analytics.revenueCurrency')}
                </TableCell>
                <TableCell>{t(`admin.content.pricing.period.${plan.period}`)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <PermissionGate permission="content.pricing">
                      <Switch
                        checked={plan.isActive}
                        onCheckedChange={(checked) => {
                          setItems((prev) =>
                            prev.map((item) =>
                              item.id === plan.id ? { ...item, isActive: checked } : item,
                            ),
                          );
                          toast.success(t('admin.actions.saveSuccess'));
                        }}
                        aria-label={t('admin.content.pricing.table.active')}
                      />
                    </PermissionGate>
                    <Badge tone={plan.isActive ? 'success' : 'neutral'}>
                      {plan.isActive
                        ? t('admin.content.pricing.active')
                        : t('admin.content.pricing.inactive')}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <PermissionGate permission="content.pricing">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toast.success(t('admin.actions.editMock'))}
                    >
                      {t('admin.content.edit')}
                    </Button>
                  </PermissionGate>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
