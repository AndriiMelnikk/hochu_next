import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { AdminInfoPageInput, AdminPageStatus, IAdminContentItem } from '../types/admin';

const today = () => new Date().toISOString().slice(0, 10);

export interface AdminContentState {
  items: IAdminContentItem[];
  create: (input: AdminInfoPageInput) => IAdminContentItem;
  update: (id: string, input: AdminInfoPageInput) => void;
  remove: (id: string) => void;
  duplicate: (id: string) => void;
  setStatus: (id: string, status: AdminPageStatus) => void;
}

/**
 * Фабрика клієнтського сховища контенту (сторінки, блог) — mock.
 * Коли з'явиться бекенд — замінити тіла дій на виклики API, сигнатури лишаються.
 */
export const createContentStore = (initial: IAdminContentItem[]) =>
  create<AdminContentState>()(
    immer((set, get) => ({
      items: initial,
      create: (input) => {
        const item: IAdminContentItem = { ...input, id: crypto.randomUUID(), updatedAt: today() };
        set((s) => {
          s.items.unshift(item);
        });
        return item;
      },
      update: (id, input) =>
        set((s) => {
          const item = s.items.find((p) => p.id === id);
          if (item) Object.assign(item, input, { updatedAt: today() });
        }),
      remove: (id) =>
        set((s) => {
          s.items = s.items.filter((p) => p.id !== id);
        }),
      duplicate: (id) => {
        const src = get().items.find((p) => p.id === id);
        if (!src) return;
        const slugs = new Set(get().items.map((p) => p.slug));
        let n = 1;
        const slugFor = (k: number) => `${src.slug}-copy${k > 1 ? `-${k}` : ''}`;
        while (slugs.has(slugFor(n))) n += 1;
        set((s) => {
          s.items.unshift({
            ...src,
            id: crypto.randomUUID(),
            slug: slugFor(n),
            title: `${src.title} (копія)`,
            status: 'draft',
            updatedAt: today(),
          });
        });
      },
      setStatus: (id, status) =>
        set((s) => {
          const item = s.items.find((p) => p.id === id);
          if (item) {
            item.status = status;
            item.updatedAt = today();
          }
        }),
    })),
  );
