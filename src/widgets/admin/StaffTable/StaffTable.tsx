'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { STAFF_ROLES, adminStaff, type IAdminStaffMember, type StaffRole } from '@/entities/admin';
import { PermissionGate } from '@/features/admin';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@shared/ui/table';

export function StaffTable() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [items, setItems] = useState<IAdminStaffMember[]>(adminStaff);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('admin.staff.title')}</CardTitle>
        <CardDescription>{t('admin.staff.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('admin.staff.table.name')}</TableHead>
              <TableHead>{t('admin.staff.table.email')}</TableHead>
              <TableHead>{t('admin.staff.table.role')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((member) => (
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
      </CardContent>
    </Card>
  );
}
