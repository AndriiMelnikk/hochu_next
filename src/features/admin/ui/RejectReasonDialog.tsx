'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import { getAdminErrorMessage } from '../lib/errorMessage';
import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Textarea,
} from '@/ui-v2';

export const REJECT_REASON_MIN = 5;
export const REJECT_REASON_MAX = 500;

interface RejectReasonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  /** Має кинути помилку, якщо відхилення не вдалось: діалог лишиться відкритим. */
  onConfirm: (reason: string) => Promise<void>;
}

/** Діалог відхилення з обов'язковою причиною (її побачить автор запиту). */
export function RejectReasonDialog({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
}: RejectReasonDialogProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trimmed = reason.trim();
  const tooShort = trimmed.length < REJECT_REASON_MIN;

  const handleOpenChange = (next: boolean) => {
    if (busy) return;
    if (!next) {
      setReason('');
      setError(null);
    }
    onOpenChange(next);
  };

  const submit = async () => {
    if (tooShort) {
      setError(i18n._('admin.reject.reasonTooShort', { min: REJECT_REASON_MIN }));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await onConfirm(trimmed);
      setReason('');
      onOpenChange(false);
    } catch (e) {
      setError(getAdminErrorMessage(e, t));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Modal open={open} onOpenChange={handleOpenChange}>
      <ModalContent className="max-w-[520px]">
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          {description && <ModalDescription>{description}</ModalDescription>}
        </ModalHeader>
        <ModalBody className="space-y-2">
          <Label htmlFor="reject-reason">{t('admin.requests.reject.reasonLabel')}</Label>
          <Textarea
            id="reject-reason"
            value={reason}
            maxLength={REJECT_REASON_MAX}
            onChange={(e) => {
              setReason(e.target.value);
              setError(null);
            }}
            placeholder={t('admin.requests.reject.reasonPlaceholder')}
            aria-invalid={Boolean(error)}
          />
          <div className="flex items-start justify-between gap-3 text-sm">
            <p role="alert" className="text-v2-danger">
              {error}
            </p>
            <span className="shrink-0 text-v2-muted">
              {reason.length}/{REJECT_REASON_MAX}
            </span>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => handleOpenChange(false)} disabled={busy}>
            {t('admin.requests.reject.cancel')}
          </Button>
          <Button variant="danger" onClick={submit} disabled={busy || tooShort}>
            {t('admin.requests.reject.confirm')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
