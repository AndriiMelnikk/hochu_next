'use client';

import { hasPermission, useAdminPreviewStore, type StaffPermission } from '@/entities/admin';
import type { ReactNode } from 'react';

interface PermissionGateProps {
  permission: StaffPermission;
  children: ReactNode;
}

export function PermissionGate({ permission, children }: PermissionGateProps) {
  const previewRole = useAdminPreviewStore((s) => s.previewRole);
  if (!hasPermission(previewRole, permission)) return null;
  return <>{children}</>;
}
