import { useQuery } from '@tanstack/react-query';
import { categoryService } from '../services/categoryService';
import { getCategoriesResponseSchema } from '../schemas/categorySchema';
import type { ICategory } from '../types/Category';

type CategoryIdLike = string | { _id?: string } | { $oid?: string } | null | undefined;

const normalizeId = (value: CategoryIdLike): string => {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') {
    if ('_id' in value && value._id) return String(value._id);
    if ('$oid' in value && value.$oid) return String(value.$oid);
  }
  return String(value ?? '');
};

const normalizeParentId = (value: CategoryIdLike): string | null => {
  if (!value) return null;
  const normalized = normalizeId(value);
  return normalized === 'undefined' || normalized === 'null' || normalized === ''
    ? null
    : normalized;
};

const normalizeCategories = (raw: unknown): ICategory[] => {
  const parsed = getCategoriesResponseSchema.parse(raw);
  const list = Array.isArray(parsed) ? parsed : parsed.results;
  const normalized: ICategory[] = [];

  const walk = (item: (typeof list)[number], parentIdOverride?: string | null) => {
    const parentId =
      parentIdOverride ??
      normalizeParentId(
        (item as { parentId?: CategoryIdLike }).parentId ??
          (item as { parent?: CategoryIdLike }).parent ??
          (item as { parent_id?: CategoryIdLike }).parent_id,
      );

    const normalizedItem: ICategory = {
      ...item,
      _id: normalizeId(item._id),
      parentId,
      parent: undefined,
      children: undefined,
      path: Array.isArray(item.path) ? item.path.map((value) => normalizeId(value)) : item.path,
    };

    normalized.push(normalizedItem);

    if (Array.isArray(item.children)) {
      item.children.forEach((child) => walk(child, normalizedItem._id));
    }
  };

  list.forEach((item) => walk(item));
  return normalized;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories', 'list'],
    queryFn: async () => {
      const data = await categoryService.get();
      return normalizeCategories(data);
    },
  });
};
