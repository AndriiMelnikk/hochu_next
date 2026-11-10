'use client';

import { useState, type ReactNode } from 'react';
import { useLingui } from '@lingui/react';
import { getAdminErrorMessage } from '../lib/errorMessage';
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@/ui-v2';

export const PASSWORD_MIN = 8;

interface PasswordFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  /** Показати поле «поточний пароль» (зміна власного пароля). */
  askCurrent?: boolean;
  /** Має кинути помилку, якщо не вдалось: модалка лишиться відкритою. */
  onSubmit: (values: { current: string; password: string }) => Promise<void>;
  extra?: ReactNode;
}

/** Спільна форма пароля: зміна власного й скидання чужого пароля. */
export function PasswordFormModal({
  open,
  onOpenChange,
  title,
  description,
  askCurrent,
  onSubmit,
  extra,
}: PasswordFormModalProps) {
  const { i18n } = useLingui();
  const t = (id: string, v?: Record<string, string | number>) => i18n._(id, v);
  const [current, setCurrent] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const close = (next: boolean) => {
    if (busy) return;
    if (!next) {
      setCurrent('');
      setPassword('');
      setConfirm('');
      setError(null);
    }
    onOpenChange(next);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < PASSWORD_MIN) {
      setError(t('admin.password.tooShort', { min: PASSWORD_MIN }));
      return;
    }
    if (password !== confirm) {
      setError(t('admin.password.mismatch'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await onSubmit({ current, password });
      setCurrent('');
      setPassword('');
      setConfirm('');
      onOpenChange(false);
    } catch (err) {
      setError(getAdminErrorMessage(err, (id) => t(id)));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Modal open={open} onOpenChange={close}>
      <ModalContent className="max-w-[460px]">
        <form onSubmit={submit} noValidate>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            {description && <ModalDescription>{description}</ModalDescription>}
          </ModalHeader>
          <ModalBody className="space-y-4">
            {extra}
            {askCurrent && (
              <div className="space-y-2">
                <Label htmlFor="pw-current">{t('admin.password.current')}</Label>
                <Input
                  id="pw-current"
                  type="password"
                  autoComplete="current-password"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="pw-new">{t('admin.password.new')}</Label>
              <Input
                id="pw-new"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pw-confirm">{t('admin.password.confirm')}</Label>
              <Input
                id="pw-confirm"
                type="password"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>
            <p role="alert" className="min-h-5 text-sm text-v2-danger">
              {error}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button type="button" variant="outline" onClick={() => close(false)} disabled={busy}>
              {t('admin.password.cancel')}
            </Button>
            <Button type="submit" disabled={busy}>
              {t('admin.password.save')}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
