import { cache } from 'react';
import type { Locale } from '@/locales/config';
import { categoryService } from '../services/categoryService';
import type { ICategory } from '../types/Category';

export type CategoryIndex = {
  roots: ICategory[];
  bySlug: Map<string, ICategory>;
  byId: Map<string, ICategory>;
};

const SERVICES_ROOT_SLUG = 'services';

/** Дерево категорій з API (назви локалізуються через Accept-Language), кешується в межах рендеру */
export const getCategoryIndex = cache(async (locale: Locale): Promise<CategoryIndex> => {
  const data = await categoryService.get({ headers: { 'Accept-Language': locale } });
  const roots = (Array.isArray(data) ? data : data.results).filter((c) => c.isActive !== false);

  const bySlug = new Map<string, ICategory>();
  const byId = new Map<string, ICategory>();
  const walk = (category: ICategory) => {
    if (category.isActive === false) return;
    bySlug.set(category.slug, category);
    byId.set(category._id, category);
    category.children?.forEach(walk);
  };
  roots.forEach(walk);

  return { roots, bySlug, byId };
});

/** Ланцюжок від кореня до категорії включно */
export function getCategoryAncestors(index: CategoryIndex, category: ICategory): ICategory[] {
  const ancestors = (category.path ?? [])
    .map((id) => index.byId.get(id))
    .filter((c): c is ICategory => !!c);
  return [...ancestors, category];
}

/** Категорія послуг (корінь «services») — інший копірайт: «замовити», «виконавці» */
export function isServiceCategory(index: CategoryIndex, category: ICategory): boolean {
  return getCategoryAncestors(index, category)[0]?.slug === SERVICES_ROOT_SLUG;
}
