'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { useClientPagination } from '@/shared/hooks/useClientPagination';
import { STAFF_ROLES, adminStaff, type IAdminStaffMember, type StaffRole } from '@/entities/admin';
import { PermissionGate } from '@/features/admin';
import {
  Pagination,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Heading,
} from '@/ui-v2';

export function StaffTable() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [items, setItems] = useState<IAdminStaffMember[]>(adminStaff);
  const { page, setPage, totalPages, pageItems } = useClientPagination(items);

  return (
    <section className="space-y-6">
      <header>
        <Heading level="title" as="h1">
          {t('admin.staff.title')}
        </Heading>
        <p className="mt-1 text-v2-muted">{t('admin.staff.description')}</p>
      </header>
      <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('admin.staff.table.name')}</TableHead>
              <TableHead>{t('admin.staff.table.email')}</TableHead>
              <TableHead>{t('admin.staff.table.role')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageItems.map((member) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>
                  <PermissionGate permission="staff.manage">
                    <Select
                      value={member.role}
                      onValueChange={(value) => {
                        const role = value as StaffRole;
                        setItems((prev) =>
                          prev.map((item) => (item.id === member.id ? { ...item, role } : item)),
                        );
                        toast.success(t('admin.actions.saveSuccess'));
                      }}
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
                  </PermissionGate>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {totalPages > 1 && (
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        )}
      </div>
    </section>
  );
}
