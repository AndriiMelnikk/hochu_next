'use client';

import { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useCategories } from '@/entities/category';
import {
  BottomSheet,
  BottomSheetBody,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  Button,
  CascadingSelect,
  FloatingPill,
  Label,
  type CascadingSelectItem,
} from '@/ui-v2';

interface RequestFiltersSheetProps {
  /** Застосована категорія ('' — усі). */
  category: string;
  onApply: (category: string) => void;
}

/**
 * Мобільні фільтри запитів: плаваюча кнопка «Фільтри» → нижня шторка з вибором категорії
 * (як Filters у Upwork). Чернетка застосовується лише кнопкою «Застосувати».
 */
export function RequestFiltersSheet({ category, onApply }: RequestFiltersSheetProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(category);
  const { data: categories = [], isLoading, isError } = useCategories();

  const items = useMemo<CascadingSelectItem[]>(
    () => categories.map((c) => ({ id: c._id, name: c.title, parentId: c.parentId || null })),
    [categories],
  );

  const handleOpenChange = (next: boolean) => {
    // Кожне відкриття починається з поточних застосованих значень
    if (next) setDraft(category);
    setOpen(next);
  };

  return (
    <BottomSheet open={open} onOpenChange={handleOpenChange}>
      <FloatingPill onClick={() => handleOpenChange(true)}>
        <SlidersHorizontal aria-hidden />
        {t('request.list.filters')}
        {category && <span aria-hidden className="size-2 rounded-full bg-v2-primary" />}
      </FloatingPill>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>{t('request.list.filters')}</BottomSheetTitle>
          <BottomSheetDescription className="sr-only">
            {t('request.list.filters')}
          </BottomSheetDescription>
        </BottomSheetHeader>
        <BottomSheetBody className="space-y-2 pb-6">
          <Label htmlFor="filters-category" className="text-base font-semibold">
            {t('request.create.categoryLabel')}
          </Label>
          <CascadingSelect
            id="filters-category"
            items={items}
            value={draft}
            onValueChange={(id) => setDraft(id || '')}
            placeholder={
              isLoading
                ? t('request.create.categoriesLoading')
                : t('request.create.categoryPlaceholder')
            }
            disabled={isLoading || isError}
            emptyLabel={
              isError ? t('request.create.categoriesError') : t('request.create.categoriesEmpty')
            }
            clearable
          />
        </BottomSheetBody>
        <BottomSheetFooter>
          <Button
            variant="link"
            className="px-0 text-base text-v2-ink"
            onClick={() => setDraft('')}
          >
            {t('request.list.clearFilters')}
          </Button>
          <Button
            className="h-12 px-8 text-base"
            onClick={() => {
              onApply(draft);
              setOpen(false);
            }}
          >
            {t('request.list.applyFilters')}
          </Button>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  );
}
