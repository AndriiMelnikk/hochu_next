import { ROLE_PERMISSIONS } from '../const/permissions';
import type { StaffPermission, StaffRole } from '../types/admin';

export function hasPermission(role: StaffRole, permission: StaffPermission): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}

export function hasAnyPermission(role: StaffRole, permissions: StaffPermission[]): boolean {
  return permissions.some((permission) => hasPermission(role, permission));
}
