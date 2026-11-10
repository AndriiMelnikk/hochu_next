'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { STAFF_ROLES, useStaffMutations, type StaffRole } from '@/entities/admin';
import { PASSWORD_MIN, getAdminErrorMessage } from '@/features/admin';
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui-v2';

const LOGIN_RE = /^[a-zA-Z0-9._-]{3,32}$/;

export function CreateStaffModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { i18n } = useLingui();
  const t = (id: string, v?: Record<string, string | number>) => i18n._(id, v);
  const { create } = useStaffMutations();
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<StaffRole>('moderator');
  const [error, setError] = useState<string | null>(null);

  const close = (next: boolean) => {
    if (create.isPending) return;
    if (!next) {
      setLogin('');
      setName('');
      setPassword('');
      setRole('moderator');
      setError(null);
    }
    onOpenChange(next);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!LOGIN_RE.test(login.trim())) return setError(t('admin.staff.create.loginInvalid'));
    if (password.length < PASSWORD_MIN)
      return setError(t('admin.password.tooShort', { min: PASSWORD_MIN }));
    setError(null);
    try {
      await create.mutateAsync({ login: login.trim(), name: name.trim(), password, role });
      toast.success(t('admin.staff.create.success'));
      close(false);
    } catch (err) {
      setError(getAdminErrorMessage(err, (id) => t(id)));
    }
  };

  return (
    <Modal open={open} onOpenChange={close}>
      <ModalContent className="max-w-[480px]">
        <form onSubmit={submit} noValidate>
          <ModalHeader>
            <ModalTitle>{t('admin.staff.create.title')}</ModalTitle>
          </ModalHeader>
          <ModalBody className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="staff-login">{t('admin.staff.table.login')}</Label>
              <Input
                id="staff-login"
                autoComplete="off"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="staff-name">{t('admin.staff.table.name')}</Label>
              <Input id="staff-name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="staff-password">{t('admin.password.new')}</Label>
              <Input
                id="staff-password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="staff-role">{t('admin.staff.table.role')}</Label>
              <Select value={role} onValueChange={(v) => setRole(v as StaffRole)}>
                <SelectTrigger id="staff-role" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {STAFF_ROLES.map((r) => (
                    <SelectItem key={r} value={r}>
                      {t(`admin.roles.${r}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <p role="alert" className="min-h-5 text-sm text-v2-danger">
              {error}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button type="button" variant="outline" onClick={() => close(false)}>
              {t('admin.password.cancel')}
            </Button>
            <Button type="submit" disabled={create.isPending}>
              {t('admin.staff.create.submit')}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
