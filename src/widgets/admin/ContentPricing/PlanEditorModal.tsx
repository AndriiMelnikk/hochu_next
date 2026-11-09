'use client';

import { useMemo, useState } from 'react';
import { useLingui } from '@lingui/react';
import type {
  AdminPricingPeriod,
  AdminPricingPlanInput,
  IAdminPricingPlan,
} from '@/entities/admin';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  SegmentedControl,
  Switch,
  Textarea,
} from '@/ui-v2';

interface Props {
  /** null — створення нового тарифу. */
  plan: IAdminPricingPlan | null;
  existingNames: string[];
  onSubmit: (input: AdminPricingPlanInput) => void;
  onClose: () => void;
}

interface FormState {
  name: string;
  price: string;
  period: AdminPricingPeriod;
  description: string;
  features: string;
  isActive: boolean;
}

const toInput = (f: FormState): AdminPricingPlanInput => ({
  name: f.name.trim(),
  price: String(Number(f.price)),
  period: f.period,
  description: f.description.trim(),
  features: f.features
    .split('\n')
    .map((x) => x.trim())
    .filter(Boolean),
  isActive: f.isActive,
});

/** Форма створення/редагування тарифу. Монтується лише коли відкрита. */
export function PlanEditorModal({ plan, existingNames, onSubmit, onClose }: Props) {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) =>
    i18n._(`admin.content.pricing.${id}`, values);

  const initial: FormState = {
    name: plan?.name ?? '',
    price: plan?.price ?? '',
    period: plan?.period ?? 'month',
    description: plan?.description ?? '',
    features: plan?.features.join('\n') ?? '',
    isActive: plan?.isActive ?? true,
  };
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [confirmDiscard, setConfirmDiscard] = useState(false);

  const dirty = JSON.stringify(form) !== JSON.stringify(initial);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    const name = form.name.trim();
    if (!name) e.name = t('error.nameRequired');
    else if (existingNames.some((n) => n.toLowerCase() === name.toLowerCase()))
      e.name = t('error.nameTaken');
    if (!/^\d+$/.test(form.price.trim())) e.price = t('error.priceInvalid');
    return e;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, existingNames, i18n.locale]);

  const show = (k: keyof FormState) => (submitted ? errors[k] : undefined);
  const requestClose = () => (dirty ? setConfirmDiscard(true) : onClose());

  const submit = () => {
    setSubmitted(true);
    if (Object.keys(errors).length > 0) return;
    onSubmit(toInput(form));
  };

  return (
    <>
      <Modal open onOpenChange={(o) => !o && requestClose()}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>{plan ? t('editTitle') : t('createTitle')}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <form
              id="admin-plan-form"
              noValidate
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="plan-name">{t('field.name')}</Label>
                <Input
                  id="plan-name"
                  value={form.name}
                  invalid={!!show('name')}
                  placeholder={t('field.namePlaceholder')}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
                <FieldError message={show('name')} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="plan-price">
                    {t('field.price')}, {i18n._('admin.analytics.revenueCurrency')}
                  </Label>
                  <Input
                    id="plan-price"
                    inputMode="numeric"
                    value={form.price}
                    invalid={!!show('price')}
                    placeholder="0"
                    onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
                  />
                  <FieldError message={show('price')} />
                </div>
                <div className="space-y-2">
                  <Label>{t('field.period')}</Label>
                  <div>
                    <SegmentedControl<AdminPricingPeriod>
                      value={form.period}
                      onValueChange={(period) => setForm((f) => ({ ...f, period }))}
                      options={[
                        { value: 'month', label: t('period.month') },
                        { value: 'year', label: t('period.year') },
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan-description">{t('field.description')}</Label>
                <Input
                  id="plan-description"
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan-features">{t('field.features')}</Label>
                <Textarea
                  id="plan-features"
                  value={form.features}
                  onChange={(e) => setForm((f) => ({ ...f, features: e.target.value }))}
                />
                <p className="text-xs text-v2-muted">{t('field.featuresHint')}</p>
              </div>

              <div className="flex items-center gap-3">
                <Switch
                  id="plan-active"
                  checked={form.isActive}
                  onCheckedChange={(isActive) => setForm((f) => ({ ...f, isActive }))}
                />
                <Label htmlFor="plan-active">{t('field.active')}</Label>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="button" variant="outline" onClick={requestClose}>
              {i18n._('admin.content.cancel')}
            </Button>
            <Button type="submit" form="admin-plan-form">
              {i18n._('admin.content.save')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AlertDialog open={confirmDiscard} onOpenChange={setConfirmDiscard}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('discard.title')}</AlertDialogTitle>
            <AlertDialogDescription>{t('discard.description')}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('discard.keep')}</AlertDialogCancel>
            <AlertDialogAction onClick={onClose}>{t('discard.confirm')}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="text-xs text-v2-danger">
      {message}
    </p>
  );
}
