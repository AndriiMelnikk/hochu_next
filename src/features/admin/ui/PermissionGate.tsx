'use client';

import { hasPermission, useAdminRole, type StaffPermission } from '@/entities/admin';
import type { ReactNode } from 'react';

interface PermissionGateProps {
  permission: StaffPermission;
  children: ReactNode;
}

export function PermissionGate({ permission, children }: PermissionGateProps) {
  const previewRole = useAdminRole();
  if (!hasPermission(previewRole, permission)) return null;
  return <>{children}</>;
}
