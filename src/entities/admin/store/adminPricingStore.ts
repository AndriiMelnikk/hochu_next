import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { adminPricingPlans } from '../mocks/adminMockData';
import type { AdminPricingPlanInput, IAdminPricingPlan } from '../types/admin';

interface AdminPricingState {
  plans: IAdminPricingPlan[];
  create: (input: AdminPricingPlanInput) => void;
  update: (id: string, input: AdminPricingPlanInput) => void;
  remove: (id: string) => void;
  setActive: (id: string, isActive: boolean) => void;
  /** Зсув плану вгору (-1) або вниз (+1) у порядку показу. */
  move: (id: string, direction: -1 | 1) => void;
}

/** Клієнтське сховище тарифів (mock). Після появи бекенду замінити тіла дій на API. */
export const useAdminPricingStore = create<AdminPricingState>()(
  immer((set) => ({
    plans: adminPricingPlans,
    create: (input) =>
      set((s) => {
        s.plans.push({ ...input, id: crypto.randomUUID() });
      }),
    update: (id, input) =>
      set((s) => {
        const plan = s.plans.find((p) => p.id === id);
        if (plan) Object.assign(plan, input);
      }),
    remove: (id) =>
      set((s) => {
        s.plans = s.plans.filter((p) => p.id !== id);
      }),
    setActive: (id, isActive) =>
      set((s) => {
        const plan = s.plans.find((p) => p.id === id);
        if (plan) plan.isActive = isActive;
      }),
    move: (id, direction) =>
      set((s) => {
        const i = s.plans.findIndex((p) => p.id === id);
        const j = i + direction;
        if (i < 0 || j < 0 || j >= s.plans.length) return;
        [s.plans[i], s.plans[j]] = [s.plans[j], s.plans[i]];
      }),
  })),
);
