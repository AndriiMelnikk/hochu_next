'use client';

import { useState } from 'react';
import { KeyRound } from 'lucide-react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { useStaffMutations } from '@/entities/admin';
import { Button } from '@/ui-v2';
import { PasswordFormModal } from './PasswordFormModal';

/** Кнопка + модалка зміни власного пароля (доступна кожному співробітнику). */
export function ChangePasswordModal() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [open, setOpen] = useState(false);
  const { changeOwnPassword } = useStaffMutations();

  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
        <KeyRound />
        <span className="hidden sm:inline">{t('admin.password.changeOwn')}</span>
      </Button>
      <PasswordFormModal
        open={open}
        onOpenChange={setOpen}
        title={t('admin.password.changeOwn')}
        askCurrent
        onSubmit={async ({ current, password }) => {
          await changeOwnPassword.mutateAsync({ currentPassword: current, newPassword: password });
          toast.success(t('admin.password.changed'));
        }}
      />
    </>
  );
}
