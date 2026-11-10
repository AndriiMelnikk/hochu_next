'use client';

import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { getAdminErrorMessage } from '../lib/errorMessage';
import { RejectReasonDialog } from './RejectReasonDialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@/ui-v2';

interface ApproveRejectActionsProps {
  entityLabel: string;
  /** Реальні дії (бекенд). Без них компонент працює як демо-заглушка і лише викликає `onResolved`. */
  onApprove?: () => Promise<void>;
  onReject?: (reason: string) => Promise<void>;
  onResolved?: () => void;
  /** Показати лише одну з дій (напр. не можна схвалити вже схвалений запит). */
  canApprove?: boolean;
  canReject?: boolean;
}

export function ApproveRejectActions({
  entityLabel,
  onApprove,
  onReject,
  onResolved,
  canApprove = true,
  canReject = true,
}: ApproveRejectActionsProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [approveOpen, setApproveOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleApprove = async () => {
    if (!onApprove) {
      toast.success(t('admin.actions.approveSuccess'), { description: entityLabel });
      setApproveOpen(false);
      onResolved?.();
      return;
    }
    setBusy(true);
    try {
      await onApprove();
      toast.success(t('admin.requests.toast.approved'), { description: entityLabel });
      setApproveOpen(false);
      onResolved?.();
    } catch (e) {
      toast.error(getAdminErrorMessage(e, t));
    } finally {
      setBusy(false);
    }
  };

  const handleReject = async (reason: string) => {
    if (!onReject) {
      toast.success(t('admin.actions.rejectSuccess'), { description: reason });
      onResolved?.();
      return;
    }
    await onReject(reason);
    toast.success(t('admin.requests.toast.rejected'), { description: entityLabel });
    onResolved?.();
  };

  return (
    <div className="flex gap-2">
      {canApprove && (
        <AlertDialog open={approveOpen} onOpenChange={(o) => !busy && setApproveOpen(o)}>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" shape="circle" aria-label={t('admin.actions.approve')}>
              <CheckCircle className="h-4 w-4 text-v2-primary" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t('admin.requests.approve.title')}</AlertDialogTitle>
              <AlertDialogDescription>
                {t('admin.requests.approve.description')}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={busy}>
                {t('admin.requests.approve.cancel')}
              </AlertDialogCancel>
              <AlertDialogAction
                disabled={busy}
                onClick={(e) => {
                  e.preventDefault(); // діалог закриваємо самі після відповіді бекенду
                  void handleApprove();
                }}
              >
                {t('admin.requests.approve.confirm')}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {canReject && (
        <>
          <Button
            variant="ghost"
            shape="circle"
            aria-label={t('admin.actions.reject')}
            className="text-v2-danger"
            onClick={() => setRejectOpen(true)}
          >
            <XCircle className="h-4 w-4" />
          </Button>
          <RejectReasonDialog
            open={rejectOpen}
            onOpenChange={setRejectOpen}
            title={t('admin.requests.reject.title')}
            description={entityLabel}
            onConfirm={handleReject}
          />
        </>
      )}
    </div>
  );
}
