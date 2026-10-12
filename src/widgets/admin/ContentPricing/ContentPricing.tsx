'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { adminPricingPlans, type IAdminPricingPlan } from '@/entities/admin';
import { PermissionGate } from '@/features/admin';
import { Badge } from '@shared/ui/badge';
import { Button } from '@shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Switch } from '@shared/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@shared/ui/table';

export function ContentPricing() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [items, setItems] = useState<IAdminPricingPlan[]>(adminPricingPlans);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('admin.content.pricing.title')}</CardTitle>
        <CardDescription>{t('admin.content.pricing.description')}</CardDescription>
      </CardHeader>
      <CardContent>
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
                    <Badge variant={plan.isActive ? 'success' : 'secondary'}>
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
      </CardContent>
    </Card>
  );
}
