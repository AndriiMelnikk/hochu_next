import type { ICategory } from '../types/Category';

export function getCategoryPath(categories: ICategory[], categoryId: string): ICategory[] {
  if (!categoryId) return [];

  const byId = new Map(categories.map((category) => [category._id, category]));
  const target = byId.get(categoryId);

  if (!target) return [];

  if (target.path?.length) {
    const pathFromApi = target.path
      .map((id) => byId.get(id))
      .filter((category): category is ICategory => !!category);

    if (pathFromApi.length > 0) {
      const includesTarget = pathFromApi.some((category) => category._id === target._id);
      return includesTarget ? pathFromApi : [...pathFromApi, target];
    }
  }

  const path: ICategory[] = [];
  let current: ICategory | undefined = target;

  while (current) {
    path.unshift(current);
    current = current.parentId ? byId.get(current.parentId) : undefined;
  }

  return path;
}
