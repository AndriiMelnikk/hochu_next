'use client';

import { STAFF_ROLES, useAdminPreviewStore, type StaffRole } from '@/entities/admin';
import { Label } from '@shared/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';
import { useLingui } from '@lingui/react';

export function RolePreviewSelect() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const previewRole = useAdminPreviewStore((s) => s.previewRole);
  const setPreviewRole = useAdminPreviewStore((s) => s.setPreviewRole);

  return (
    <div className="space-y-2">
      <Label htmlFor="admin-role-preview">{t('admin.rolePreview.label')}</Label>
      <Select value={previewRole} onValueChange={(value) => setPreviewRole(value as StaffRole)}>
        <SelectTrigger id="admin-role-preview" className="w-full">
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
      <p className="text-xs text-muted-foreground">{t('admin.rolePreview.hint')}</p>
    </div>
  );
}
