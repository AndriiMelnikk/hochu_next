'use client';

import { useMemo, useState } from 'react';
import { useLingui } from '@lingui/react';
import Header from '@/widgets/app/Header';
import Footer from '@/widgets/app/Footer';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Textarea } from '@shared/ui/textarea';
import { Label } from '@shared/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';
import { FileText, DollarSign, MapPin, Clock, Upload } from 'lucide-react';
import { useCategories } from '@entities/category';

export default function CreateRequestContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [category, setCategory] = useState('');
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const [urgency, setUrgency] = useState('');
  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories();

  const categoryPlaceholder = isCategoriesLoading
    ? t('request.create.categoriesLoading')
    : t('request.create.categoryPlaceholder');
  const categoryEmptyLabel = isCategoriesError
    ? t('request.create.categoriesError')
    : t('request.create.categoriesEmpty');

  const isCategoryDisabled = isCategoriesLoading || isCategoriesError;

  const sortedActiveCategories = useMemo(() => {
    return categories
      .filter((item) => item.isActive !== false)
      .slice()
      .sort((a, b) => {
        const orderDiff = (a.order ?? 0) - (b.order ?? 0);
        if (orderDiff !== 0) return orderDiff;
        return a.name.localeCompare(b.name, 'uk');
      });
  }, [categories]);

  const categoriesById = useMemo(() => {
    return new Map(sortedActiveCategories.map((item) => [item._id, item]));
  }, [sortedActiveCategories]);

  const categoriesByParentId = useMemo(() => {
    const map = new Map<string, typeof sortedActiveCategories>();
    sortedActiveCategories.forEach((item) => {
      const key = item.parentId ?? 'root';
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)?.push(item);
    });
    return map;
  }, [sortedActiveCategories]);

  const categoryLevels = useMemo(() => {
    const levels: (typeof sortedActiveCategories)[] = [];
    let parentId: string | null = null;

    while (true) {
      const options = categoriesByParentId.get(parentId ?? 'root') ?? [];
      if (levels.length === 0 || options.length > 0) {
        levels.push(options);
      }
      if (options.length === 0) break;

      const selectedId = selectedCategoryIds[levels.length - 1];
      if (!selectedId) break;
      parentId = selectedId;
    }

    return levels;
  }, [categoriesByParentId, selectedCategoryIds]);

  const handleCategoryChange = (levelIndex: number, selectedId: string) => {
    setSelectedCategoryIds((prev) => {
      const next = prev.slice(0, levelIndex);
      next[levelIndex] = selectedId;
      return next;
    });

    const selected = categoriesById.get(selectedId);
    setCategory(selected?.slug ?? '');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">
              {t('request.create.titlePrefix')}{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('request.create.titleEmphasis')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">{t('request.create.subtitle')}</p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
            <form className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base font-semibold flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  {t('request.create.titleLabel')}
                </Label>
                <Input
                  id="title"
                  placeholder={t('request.create.titlePlaceholder')}
                  className="text-base"
                />
                <p className="text-sm text-muted-foreground">{t('request.create.titleHint')}</p>
              </div>

              {/* Category */}
              <div className="space-y-4">
                {categoryLevels.map((levelOptions, levelIndex) => (
                  <div key={`category-level-${levelIndex}`} className="space-y-2">
                    <Label htmlFor={`category-${levelIndex}`} className="text-base font-semibold">
                      {levelIndex === 0
                        ? t('request.create.categoryLabel')
                        : t('request.create.subcategoryLabel')}
                    </Label>
                    <Select
                      value={selectedCategoryIds[levelIndex] ?? ''}
                      onValueChange={(value) => handleCategoryChange(levelIndex, value)}
                      disabled={isCategoryDisabled}
                    >
                      <SelectTrigger id={`category-${levelIndex}`} className="text-base">
                        <SelectValue
                          placeholder={
                            levelIndex === 0
                              ? categoryPlaceholder
                              : t('request.create.subcategoryPlaceholder')
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {levelOptions.length > 0 ? (
                          levelOptions.map((item) => (
                            <SelectItem key={item._id} value={item._id}>
                              {item.name}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="__empty__" disabled>
                            {categoryEmptyLabel}
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-base font-semibold">
                  {t('request.create.descriptionLabel')}
                </Label>
                <Textarea
                  id="description"
                  placeholder={t('request.create.descriptionPlaceholder')}
                  rows={6}
                  className="text-base"
                />
              </div>

              {/* Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget-min" className="text-base font-semibold flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-primary" />
                    {t('request.create.budgetMinLabel')}
                  </Label>
                  <Input
                    id="budget-min"
                    type="number"
                    placeholder={t('request.create.budgetMinPlaceholder')}
                    className="text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget-max" className="text-base font-semibold">
                    {t('request.create.budgetMaxLabel')}
                  </Label>
                  <Input
                    id="budget-max"
                    type="number"
                    placeholder={t('request.create.budgetMaxPlaceholder')}
                    className="text-base"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-base font-semibold flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-secondary" />
                  {t('request.create.locationLabel')}
                </Label>
                <Input
                  id="location"
                  placeholder={t('request.create.locationPlaceholder')}
                  className="text-base"
                />
              </div>

              {/* Urgency */}
              <div className="space-y-2">
                <Label htmlFor="urgency" className="text-base font-semibold flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  {t('request.create.urgencyLabel')}
                </Label>
                <Select value={urgency} onValueChange={setUrgency}>
                  <SelectTrigger id="urgency" className="text-base">
                    <SelectValue placeholder={t('request.create.urgencyPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flexible">{t('request.create.urgencyFlexible')}</SelectItem>
                    <SelectItem value="week">{t('request.create.urgencyWeek')}</SelectItem>
                    <SelectItem value="days">{t('request.create.urgencyDays')}</SelectItem>
                    <SelectItem value="urgent">{t('request.create.urgencyUrgent')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="files" className="text-base font-semibold flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-primary" />
                  {t('request.create.filesLabel')}
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">
                    {t('request.create.filesHintPrimary')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('request.create.filesHintSecondary')}
                  </p>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="submit"
                  size="lg"
                  variant="gradient"
                  className="flex-1 text-lg shadow-glow"
                >
                  {t('request.create.submitPublish')}
                </Button>
                <Button type="button" variant="outline" size="lg" className="sm:w-auto">
                  {t('request.create.submitDraft')}
                </Button>
              </div>

              {/* Info */}
              <div className="bg-accent/30 rounded-lg p-4 border border-accent">
                <p className="text-sm text-accent-foreground">
                  <strong>{t('request.create.tipLabel')}</strong> {t('request.create.tipText')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
