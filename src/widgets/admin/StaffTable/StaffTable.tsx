'use client';

import { useState } from 'react';
import { KeyRound, UserPlus } from 'lucide-react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import {
  STAFF_ROLES,
  useAdminMe,
  useAdminStaff,
  useStaffMutations,
  type IAdminStaffMember,
  type StaffRole,
} from '@/entities/admin';
import { PasswordFormModal, PermissionGate, getAdminErrorMessage } from '@/features/admin';
import {
  Badge,
  Button,
  ErrorState,
  Heading,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-v2';
import { formatDateTime } from '@/widgets/admin/ModerationRequests/formatDateTime';
import { CreateStaffModal } from './CreateStaffModal';

export function StaffTable() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: me } = useAdminMe();
  const { data, isLoading, isError, refetch } = useAdminStaff();
  const { update, resetPassword } = useStaffMutations();
  const [createOpen, setCreateOpen] = useState(false);
  const [resetFor, setResetFor] = useState<IAdminStaffMember | null>(null);

  const change = async (
    member: IAdminStaffMember,
    patch: { role?: StaffRole; isActive?: boolean },
  ) => {
    try {
      await update.mutateAsync({ id: member.id, patch });
      toast.success(t('admin.staff.saved'));
    } catch (e) {
      toast.error(getAdminErrorMessage(e, t));
    }
  };

  const items = data?.results ?? [];

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Heading level="title" as="h1">
            {t('admin.staff.title')}
          </Heading>
          <p className="mt-1 text-v2-muted">{t('admin.staff.description')}</p>
        </div>
        <PermissionGate permission="staff.manage">
          <Button onClick={() => setCreateOpen(true)}>
            <UserPlus />
            {t('admin.staff.create.open')}
          </Button>
        </PermissionGate>
      </header>

      {isError ? (
        <div className="flex flex-col items-center gap-3">
          <ErrorState message={t('admin.error.generic')} />
          <Button variant="outline" size="sm" onClick={() => void refetch()}>
            {t('admin.error.retry')}
          </Button>
        </div>
      ) : isLoading ? (
        <p className="py-12 text-center text-v2-muted">{t('admin.requests.loading')}</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('admin.staff.table.login')}</TableHead>
              <TableHead>{t('admin.staff.table.role')}</TableHead>
              <TableHead>{t('admin.staff.table.active')}</TableHead>
              <TableHead>{t('admin.staff.table.lastLogin')}</TableHead>
              <TableHead>{t('admin.staff.table.actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((member) => {
              const isSelf = member.id === me?.id;
              return (
                <TableRow key={member.id}>
                  <TableCell>
                    <span className="font-medium">{member.name || member.login}</span>
                    {isSelf && (
                      <Badge tone="info" className="ml-2">
                        {t('admin.staff.you')}
                      </Badge>
                    )}
                    <span className="block text-sm text-v2-muted">{member.login}</span>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={member.role}
                      disabled={isSelf || update.isPending}
                      onValueChange={(value) => void change(member, { role: value as StaffRole })}
                    >
                      <SelectTrigger className="w-[160px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {STAFF_ROLES.map((role) => (
                          <SelectItem key={role} value={role}>
                            {t(`admin.roles.${role}`)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={member.isActive}
                      disabled={isSelf || update.isPending}
                      aria-label={t('admin.staff.table.active')}
                      onCheckedChange={(checked) => void change(member, { isActive: checked })}
                    />
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {member.lastLoginAt
                      ? formatDateTime(member.lastLoginAt, i18n.locale)
                      : t('admin.staff.never')}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      shape="circle"
                      aria-label={t('admin.staff.resetPassword')}
                      onClick={() => setResetFor(member)}
                    >
                      <KeyRound className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}

      <CreateStaffModal open={createOpen} onOpenChange={setCreateOpen} />
      <PasswordFormModal
        open={Boolean(resetFor)}
        onOpenChange={(open) => !open && setResetFor(null)}
        title={t('admin.staff.resetPassword')}
        description={resetFor?.login}
        onSubmit={async ({ password }) => {
          if (!resetFor) return;
          await resetPassword.mutateAsync({ id: resetFor.id, password });
          toast.success(t('admin.password.changed'));
        }}
      />
    </section>
  );
}
