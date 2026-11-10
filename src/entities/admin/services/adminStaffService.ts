import type { AdminStaffInput, IAdminMe, IAdminStaffMember, StaffRole } from '../types/admin';
import { adminCall as call } from './adminHttp';

export const adminAuthService = {
  me: () => call<IAdminMe>('/auth/me'),
  changePassword: (input: { currentPassword: string; newPassword: string }) =>
    call<{ success: boolean }>('/auth/change-password', {
      method: 'POST',
      body: JSON.stringify(input),
    }),
};

export const adminStaffService = {
  list: () => call<{ count: number; results: IAdminStaffMember[] }>('/staff'),
  create: (input: AdminStaffInput) =>
    call<IAdminStaffMember>('/staff', { method: 'POST', body: JSON.stringify(input) }),
  update: (id: string, patch: { name?: string; role?: StaffRole; isActive?: boolean }) =>
    call<IAdminStaffMember>(`/staff/${id}`, { method: 'PATCH', body: JSON.stringify(patch) }),
  resetPassword: (id: string, password: string) =>
    call<{ success: boolean }>(`/staff/${id}/password`, {
      method: 'POST',
      body: JSON.stringify({ password }),
    }),
};
