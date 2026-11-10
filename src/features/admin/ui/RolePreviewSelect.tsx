'use client';

import { STAFF_ROLES, useAdminMe, useAdminPreviewStore, type StaffRole } from '@/entities/admin';
import { useLingui } from '@lingui/react';
import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui-v2';

export function RolePreviewSelect() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: me } = useAdminMe();
  const preview = useAdminPreviewStore((s) => s.previewRole);
  const setPreviewRole = useAdminPreviewStore((s) => s.setPreviewRole);
  // Перегляд очима іншої ролі доступний лише повному адміну; решта бачить лише свою роль
  if (me?.role !== 'admin') return null;
  const previewRole = preview ?? me.role;

  return (
    <div className="space-y-2">
      <Label htmlFor="admin-role-preview">{t('admin.rolePreview.label')}</Label>
      <Select
        value={previewRole}
        onValueChange={(value) => setPreviewRole(value === me.role ? null : (value as StaffRole))}
      >
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
      <p className="text-xs text-v2-muted">{t('admin.rolePreview.hint')}</p>
    </div>
  );
}
