'use client';

import { useState } from 'react';
import { Ban, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { Button } from '@shared/ui/button';
import { Label } from '@shared/ui/label';
import { Textarea } from '@shared/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';
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
} from '@shared/ui/alert-dialog';

interface BlockUserActionsProps {
  userName: string;
  status: 'active' | 'blocked';
  onChanged?: (next: 'active' | 'blocked') => void;
}

export function BlockUserActions({ userName, status, onChanged }: BlockUserActionsProps) {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string>) => i18n._(id, values);
  const [reason, setReason] = useState('');
  const [duration, setDuration] = useState('7d');

  if (status === 'blocked') {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon" aria-label={t('admin.users.unban')}>
            <CheckCircle className="h-4 w-4 text-green-700" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('admin.users.unban.title')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('admin.users.unban.description', { name: userName })}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('admin.users.ban.cancel')}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                toast.success(t('admin.actions.unbanSuccess'), { description: userName });
                onChanged?.('active');
              }}
            >
              {t('admin.users.unban.confirm')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={t('admin.users.ban.confirm')}
          className="text-destructive"
        >
          <Ban className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('admin.users.ban.title')}</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="space-y-4 mt-2 text-sm text-muted-foreground">
              <p>
                {t('admin.users.ban.userLabel')}{' '}
                <span className="font-medium text-foreground">{userName}</span>
              </p>
              <div className="space-y-2">
                <Label htmlFor="ban-reason">{t('admin.users.ban.reasonLabel')}</Label>
                <Textarea
                  id="ban-reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder={t('admin.users.ban.reasonPlaceholder')}
                />
              </div>
              <div className="space-y-2">
                <Label>{t('admin.users.ban.durationLabel')}</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">{t('admin.users.ban.duration.24h')}</SelectItem>
                    <SelectItem value="7d">{t('admin.users.ban.duration.7d')}</SelectItem>
                    <SelectItem value="30d">{t('admin.users.ban.duration.30d')}</SelectItem>
                    <SelectItem value="permanent">
                      {t('admin.users.ban.duration.permanent')}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t('admin.users.ban.cancel')}</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={() => {
              toast.success(t('admin.actions.banSuccess'), {
                description: reason.trim() || userName,
              });
              setReason('');
              onChanged?.('blocked');
            }}
          >
            {t('admin.users.ban.confirm')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
