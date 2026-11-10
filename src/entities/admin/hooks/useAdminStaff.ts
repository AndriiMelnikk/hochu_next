'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { adminAuthService, adminStaffService } from '../services/adminStaffService';
import { hasPermission } from '../lib/can';
import { useAdminPreviewStore } from '../store/adminPreviewStore';
import type { StaffRole } from '../types/admin';

export const ADMIN_ME_KEY = ['admin', 'me'] as const;
const STAFF_KEY = ['admin', 'staff'] as const;

/** Справжній співробітник, що увійшов (роль і права приходять з бекенду). */
export function useAdminMe({ enabled = true }: { enabled?: boolean } = {}) {
  return useQuery({
    enabled,
    queryKey: ADMIN_ME_KEY,
    queryFn: adminAuthService.me,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}

/**
 * Роль, за якою будується меню: справжня або вибрана для перегляду (лише адмін).
 * Поки профіль не завантажено, повертається найменш привілейована роль.
 */
export function useAdminRole(): StaffRole {
  const { data: me } = useAdminMe();
  const preview = useAdminPreviewStore((s) => s.previewRole);
  if (me?.role === 'admin' && preview) return preview;
  return me?.role ?? 'analyst';
}

export function useCanDo(permission: Parameters<typeof hasPermission>[1]): boolean {
  return hasPermission(useAdminRole(), permission);
}

export function useAdminStaff() {
  return useQuery({ queryKey: STAFF_KEY, queryFn: adminStaffService.list });
}

export function useStaffMutations() {
  const qc = useQueryClient();
  const refresh = () => qc.invalidateQueries({ queryKey: STAFF_KEY });
  return {
    create: useMutation({ mutationFn: adminStaffService.create, onSuccess: refresh }),
    update: useMutation({
      mutationFn: (v: { id: string; patch: Parameters<typeof adminStaffService.update>[1] }) =>
        adminStaffService.update(v.id, v.patch),
      onSuccess: refresh,
    }),
    resetPassword: useMutation({
      mutationFn: (v: { id: string; password: string }) =>
        adminStaffService.resetPassword(v.id, v.password),
    }),
    changeOwnPassword: useMutation({ mutationFn: adminAuthService.changePassword }),
  };
}
