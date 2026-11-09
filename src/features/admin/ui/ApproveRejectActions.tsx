'use client';

import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { Button, Label, Textarea } from '@/ui-v2';
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
} from '@/ui-v2';

interface ApproveRejectActionsProps {
  entityLabel: string;
  onResolved?: () => void;
}

export function ApproveRejectActions({ entityLabel, onResolved }: ApproveRejectActionsProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [reason, setReason] = useState('');

  const handleApprove = () => {
    toast.success(t('admin.actions.approveSuccess'), { description: entityLabel });
    onResolved?.();
  };

  const handleReject = () => {
    toast.success(t('admin.actions.rejectSuccess'), {
      description: reason.trim() || entityLabel,
    });
    setReason('');
    onResolved?.();
  };

  return (
    <div className="flex gap-2">
      <AlertDialog>
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
            <AlertDialogCancel>{t('admin.requests.approve.cancel')}</AlertDialogCancel>
            <AlertDialogAction onClick={handleApprove}>
              {t('admin.requests.approve.confirm')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="ghost"
            shape="circle"
            aria-label={t('admin.actions.reject')}
            className="text-v2-danger"
          >
            <XCircle className="h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('admin.requests.reject.title')}</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-4 mt-2 text-sm text-v2-muted">
                <div className="space-y-2">
                  <Label htmlFor="reject-reason">{t('admin.requests.reject.reasonLabel')}</Label>
                  <Textarea
                    id="reject-reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder={t('admin.requests.reject.reasonPlaceholder')}
                  />
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('admin.requests.reject.cancel')}</AlertDialogCancel>
            <AlertDialogAction
              className="bg-v2-danger text-white hover:opacity-90"
              onClick={handleReject}
            >
              {t('admin.requests.reject.confirm')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
