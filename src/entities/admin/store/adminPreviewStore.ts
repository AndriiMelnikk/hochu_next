import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { StaffRole } from '../types/admin';

interface AdminPreviewState {
  previewRole: StaffRole;
  setPreviewRole: (role: StaffRole) => void;
}

export const useAdminPreviewStore = create<AdminPreviewState>()(
  immer((set) => ({
    previewRole: 'admin',
    setPreviewRole: (role) =>
      set((state) => {
        state.previewRole = role;
      }),
  })),
);
