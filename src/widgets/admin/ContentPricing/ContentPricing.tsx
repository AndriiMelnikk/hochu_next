'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { ArrowDown, ArrowUp, CreditCard, Plus, Trash2 } from 'lucide-react';
import { useAdminPricingStore, type IAdminPricingPlan } from '@/entities/admin';
import { PermissionGate } from '@/features/admin';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Badge,
  Button,
  EmptyState,
  Heading,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-v2';
import { PlanEditorModal } from './PlanEditorModal';

export function ContentPricing() {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) =>
    i18n._(`admin.content.pricing.${id}`, values);

  const { plans, create, update, remove, setActive, move } = useAdminPricingStore();
  // undefined — закрито, null — створення, об'єкт — редагування
  const [editing, setEditing] = useState<IAdminPricingPlan | null | undefined>(undefined);
  const [deleting, setDeleting] = useState<IAdminPricingPlan | null>(null);

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Heading level="title" as="h1">
            {t('title')}
          </Heading>
          <p className="mt-1 text-v2-muted">{t('description')}</p>
        </div>
        <PermissionGate permission="content.pricing">
          <Button onClick={() => setEditing(null)}>
            <Plus />
            {t('create')}
          </Button>
        </PermissionGate>
      </header>

      {plans.length === 0 ? (
        <EmptyState icon={<CreditCard />} title={t('empty.title')}>
          {t('empty.hint')}
        </EmptyState>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('table.name')}</TableHead>
              <TableHead>
                {t('table.price')} / {t('table.period')}
              </TableHead>
              <TableHead className="hidden xl:table-cell">{t('table.features')}</TableHead>
              <TableHead>{t('table.active')}</TableHead>
              <TableHead>{i18n._('admin.content.table.actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plans.map((plan, index) => (
              <TableRow key={plan.id}>
                <TableCell>
                  <div className="font-medium">{plan.name}</div>
                  {plan.description && (
                    <div className="text-xs text-v2-muted">{plan.description}</div>
                  )}
                </TableCell>
                <TableCell>
                  {plan.price === '0'
                    ? t('free')
                    : `${plan.price} ${i18n._('admin.analytics.revenueCurrency')} / ${t(`period.${plan.period}`)}`}
                </TableCell>
                <TableCell className="hidden xl:table-cell">
                  {t('features.count', { count: plan.features.length })}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <PermissionGate permission="content.pricing">
                      <Switch
                        checked={plan.isActive}
                        onCheckedChange={(checked) => {
                          setActive(plan.id, checked);
                          toast.success(t(checked ? 'toast.activated' : 'toast.deactivated'));
                        }}
                        aria-label={t('table.active')}
                      />
                    </PermissionGate>
                    <Badge tone={plan.isActive ? 'success' : 'neutral'}>
                      {plan.isActive ? t('active') : t('inactive')}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <PermissionGate permission="content.pricing">
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <Button
                        variant="ghost"
                        size="sm"
                        shape="circle"
                        aria-label={t('action.moveUp')}
                        disabled={index === 0}
                        onClick={() => move(plan.id, -1)}
                      >
                        <ArrowUp />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        shape="circle"
                        aria-label={t('action.moveDown')}
                        disabled={index === plans.length - 1}
                        onClick={() => move(plan.id, 1)}
                      >
                        <ArrowDown />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setEditing(plan)}>
                        {i18n._('admin.content.edit')}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        shape="circle"
                        aria-label={t('action.delete')}
                        onClick={() => setDeleting(plan)}
                      >
                        <Trash2 className="text-v2-danger" />
                      </Button>
                    </div>
                  </PermissionGate>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {editing !== undefined && (
        <PlanEditorModal
          key={editing?.id ?? 'new'}
          plan={editing}
          existingNames={plans.filter((p) => p.id !== editing?.id).map((p) => p.name)}
          onClose={() => setEditing(undefined)}
          onSubmit={(input) => {
            if (editing) {
              update(editing.id, input);
              toast.success(t('toast.updated'));
            } else {
              create(input);
              toast.success(t('toast.created'));
            }
            setEditing(undefined);
          }}
        />
      )}

      <AlertDialog open={!!deleting} onOpenChange={(o) => !o && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('delete.title')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('delete.description', { name: deleting?.name ?? '' })}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{i18n._('admin.content.cancel')}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (deleting) remove(deleting.id);
                setDeleting(null);
                toast.success(t('toast.deleted'));
              }}
            >
              {t('action.delete')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
