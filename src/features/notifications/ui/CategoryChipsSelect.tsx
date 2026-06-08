'use client';

import { useMemo } from 'react';
import { X } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useCategories } from '@/entities/category';
import { CascadingSelect, type CascadingSelectItem } from '@/shared/ui/cascading-select';
import { Badge } from '@/shared/ui/badge';

interface CategoryChipsSelectProps {
  value: string[];
  onChange: (ids: string[]) => void;
  disabled?: boolean;
}

export const CategoryChipsSelect = ({ value, onChange, disabled }: CategoryChipsSelectProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories();

  const cascadingCategories = useMemo<CascadingSelectItem[]>(() => {
    return categories.map((cat) => ({
      id: cat._id,
      name: cat.title,
      parentId: cat.parentId || null,
    }));
  }, [categories]);

  const categoriesById = useMemo(() => {
    return new Map(categories.map((cat) => [cat._id, cat.title]));
  }, [categories]);

  const handleAdd = (id: string | null) => {
    if (!id || value.includes(id)) return;
    onChange([...value, id]);
  };

  const handleRemove = (id: string) => {
    onChange(value.filter((item) => item !== id));
  };

  return (
    <div className="space-y-3">
      <CascadingSelect
        items={cascadingCategories}
        value=""
        onValueChange={handleAdd}
        placeholder={
          isCategoriesLoading
            ? t('request.create.categoriesLoading')
            : t('profile.notifications.subscriptions.addCategory')
        }
        disabled={disabled || isCategoriesLoading || isCategoriesError}
        emptyLabel={
          isCategoriesError
            ? t('request.create.categoriesError')
            : t('request.create.categoriesEmpty')
        }
        backLabel={t('request.create.categoryBackLabel')}
        moreLabel={t('request.create.categoryMoreLabel')}
      />

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((id) => (
            <Badge key={id} variant="secondary" className="gap-1 pr-1">
              {categoriesById.get(id) ?? id}
              <button
                type="button"
                onClick={() => handleRemove(id)}
                className="rounded-full p-0.5 hover:bg-muted"
                aria-label={t('profile.notifications.subscriptions.removeCategory')}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
