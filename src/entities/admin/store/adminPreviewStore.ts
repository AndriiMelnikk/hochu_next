import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { StaffRole } from '../types/admin';

interface AdminPreviewState {
  /** Роль для «перегляду очима іншої ролі» (лише UI, бекенд все одно перевіряє справжню роль). null — своя роль. */
  previewRole: StaffRole | null;
  setPreviewRole: (role: StaffRole | null) => void;
}

export const useAdminPreviewStore = create<AdminPreviewState>()(
  immer((set) => ({
    previewRole: null,
    setPreviewRole: (role) =>
      set((state) => {
        state.previewRole = role;
      }),
  })),
);
