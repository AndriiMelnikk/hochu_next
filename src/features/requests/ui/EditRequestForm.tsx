'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import { useLingui } from '@lingui/react';
import { useForm, useWatch, type FieldError, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { toast } from 'sonner';
import { FileText, Wallet, MapPin, Clock, Upload, Tag, Package, X } from 'lucide-react';

import { MAX_IMAGES, ACCEPTED_IMAGE_ACCEPT_ATTR, isAcceptedImageFile } from '@/shared/utils';

import { cn } from '@/lib/utils';
import { useCategories } from '@/entities/category';
import { CityCombobox } from '@/shared/ui/city-combobox';
import {
  updateRequestSchema,
  requestService,
  useRequestStore,
  ItemCondition,
  type IUpdateRequestRequest,
  type IRequest,
  REQUEST_URGENCY,
  REQUEST_URGENCY_LABELS,
} from '@/entities/request';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { CascadingSelect, type CascadingSelectItem } from '@/shared/ui/cascading-select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';

const urgencyOptions = Object.values(REQUEST_URGENCY).map((value) => ({
  value,
  labelKey: REQUEST_URGENCY_LABELS[value],
}));

interface EditRequestFormProps {
  request: IRequest;
  onSuccess: () => void;
  onCancel?: () => void;
}

type EditRequestFormValues = IUpdateRequestRequest & {
  title: string;
  description: string;
  category: string;
  budgetMin: number | undefined;
  budgetMax: number | undefined;
  location: string;
  urgency: number;
  itemCondition: ItemCondition;
};

export const EditRequestForm = ({ request, onSuccess, onCancel }: EditRequestFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { updateRequest } = useRequestStore();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories();

  const [urlsToDelete, setUrlsToDelete] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<{ file: File; previewUrl: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<EditRequestFormValues>({
    resolver: zodResolver(updateRequestSchema),
    defaultValues: {
      title: request.title ?? '',
      description: request.description ?? '',
      category: request.category?.id ?? '',
      budgetMin: request.budgetMin ?? undefined,
      budgetMax: request.budgetMax ?? undefined,
      location: request.location ?? '',
      urgency: request.urgency ?? undefined,
      itemCondition: request.itemCondition ?? ItemCondition.NEW,
      images: request.images ?? [],
    },
  });

  useEffect(() => {
    form.reset({
      title: request.title ?? '',
      description: request.description ?? '',
      category: request.category?.id ?? '',
      budgetMin: request.budgetMin ?? undefined,
      budgetMax: request.budgetMax ?? undefined,
      location: request.location ?? '',
      urgency: request.urgency ?? undefined,
      itemCondition: request.itemCondition ?? ItemCondition.NEW,
      images: request.images ?? [],
    });
  }, [request, form]);

  const { handleSubmit, setError, control } = form;
  const selectedCategoryId = (useWatch({ control, name: 'category' }) as string) ?? '';

  const keptExistingUrls = useMemo(
    () => (request.images ?? []).filter((url) => !urlsToDelete.includes(url)),
    [request.images, urlsToDelete],
  );
  const displayItems = useMemo(
    () => [
      ...keptExistingUrls.map((url) => ({ type: 'existing' as const, url })),
      ...newFiles.map(({ previewUrl }) => ({ type: 'new' as const, url: previewUrl })),
    ],
    [keptExistingUrls, newFiles],
  );

  const newFilesRef = useRef(newFiles);
  useEffect(() => {
    newFilesRef.current = newFiles;
  }, [newFiles]);
  useEffect(() => {
    return () => {
      newFilesRef.current.forEach(({ previewUrl }) => URL.revokeObjectURL(previewUrl));
    };
  }, []);

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
        return a.title.localeCompare(b.title, 'uk');
      });
  }, [categories]);

  const categoriesById = useMemo(() => {
    return new Map(sortedActiveCategories.map((item) => [item._id, item]));
  }, [sortedActiveCategories]);

  const cascadingCategoryItems: CascadingSelectItem[] = useMemo(() => {
    return sortedActiveCategories.map((item) => ({
      id: item._id,
      name: item.title,
      parentId: item.parentId,
    }));
  }, [sortedActiveCategories]);

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;
    const currentCount = keptExistingUrls.length + newFiles.length;
    if (currentCount + files.length > MAX_IMAGES) {
      toast.error(t('request.create.filesMaxError'));
      event.target.value = '';
      return;
    }
    const toAdd = Array.from(files).filter(isAcceptedImageFile);
    if (toAdd.length < files.length) {
      toast.error(t('request.create.filesTypeError'));
    }
    if (!toAdd.length) {
      event.target.value = '';
      return;
    }
    const withPreviews = toAdd.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setNewFiles((prev) => [...prev, ...withPreviews]);
    event.target.value = '';
  };

  const removeImage = (index: number) => {
    if (index < keptExistingUrls.length) {
      const url = keptExistingUrls[index];
      setUrlsToDelete((prev) => [...prev, url]);
    } else {
      const fileIndex = index - keptExistingUrls.length;
      setNewFiles((prev) => {
        const next = [...prev];
        const removed = next.splice(fileIndex, 1)[0];
        if (removed) URL.revokeObjectURL(removed.previewUrl);
        return next;
      });
    }
  };

  const onSubmit = async (data: EditRequestFormValues) => {
    setIsSubmitting(true);
    try {
      const newUrls: string[] = [];
      if (newFiles.length > 0) {
        for (const { file } of newFiles) {
          const url = await requestService.uploadPostImage(file);
          newUrls.push(url);
        }
      }
      const finalImages = [...keptExistingUrls, ...newUrls];

      const payload: IUpdateRequestRequest = {
        title: data.title,
        description: data.description,
        category: data.category || undefined,
        budgetMin: data.budgetMin ?? undefined,
        budgetMax: data.budgetMax ?? undefined,
        location: data.location || undefined,
        urgency: data.urgency,
        itemCondition: data.itemCondition,
        images: finalImages.length ? finalImages : undefined,
      };
      await updateRequest(request._id, payload);

      if (urlsToDelete.length > 0) {
        await Promise.all(urlsToDelete.map((url) => requestService.deleteFile(url)));
      }

      toast.success(t('request.edit.success'));
      onSuccess();
    } catch (err: unknown) {
      let handledAsFieldError = false;

      if (
        err instanceof AxiosError &&
        err.response?.data &&
        typeof err.response.data === 'object'
      ) {
        const serverErrors = err.response.data.errors || err.response.data;
        if (typeof serverErrors === 'object') {
          Object.keys(serverErrors).forEach((key) => {
            if (
              [
                'title',
                'description',
                'category',
                'budgetMin',
                'budgetMax',
                'location',
                'urgency',
                'itemCondition',
                'images',
              ].includes(key)
            ) {
              const message = Array.isArray(serverErrors[key])
                ? serverErrors[key][0]
                : serverErrors[key];
              const errorMessage = typeof message === 'string' ? message : t('request.edit.error');
              setError(key as keyof EditRequestFormValues, {
                type: 'server',
                message: errorMessage,
              });
              toast.error(errorMessage);
              handledAsFieldError = true;
            }
          });
        }
      }

      if (err instanceof AxiosError) {
        const serverData = err.response?.data;
        const serverMessage =
          serverData?.error?.message || serverData?.message || serverData?.detail;
        if (serverMessage && !handledAsFieldError) {
          toast.error(serverMessage);
          handledAsFieldError = true;
        }
      }

      const friendlyMessage = (err as { friendlyMessage?: string }).friendlyMessage;
      if (friendlyMessage && !handledAsFieldError) {
        toast.error(friendlyMessage);
      } else if (!handledAsFieldError) {
        toast.error(t('request.edit.error'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalid = (errors: FieldErrors<EditRequestFormValues>) => {
    Object.values(errors).forEach((error) => {
      const fieldError = error as FieldError;
      if (fieldError?.message) {
        toast.error(fieldError.message as string);
      }
    });
  };

  const handleCategorySelect = (categoryId: string | null, onChange: (value: string) => void) => {
    if (categoryId === null) {
      onChange('');
      return;
    }
    const selected = categoriesById.get(categoryId);
    onChange(selected?._id ?? '');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        className="space-y-6 max-h-[70vh] overflow-y-auto pr-1 pl-1"
      >
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                {t('request.create.titleLabel')}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t('request.create.titlePlaceholder')}
                  className="text-base"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormDescription>{t('request.create.titleHint')}</FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold flex items-center">
                <Tag className="h-5 w-5 mr-2 text-primary" />
                {t('request.create.categoryLabel')}
              </FormLabel>
              <FormControl>
                <CascadingSelect
                  items={cascadingCategoryItems}
                  value={selectedCategoryId}
                  onValueChange={(categoryId) => {
                    handleCategorySelect(categoryId, field.onChange);
                  }}
                  clearable
                  placeholder={categoryPlaceholder}
                  emptyLabel={categoryEmptyLabel}
                  backLabel={t('request.create.categoryBackLabel')}
                  moreLabel={t('request.create.categoryMoreLabel')}
                  disabled={isCategoryDisabled || isSubmitting}
                  className="text-base"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                {t('request.create.descriptionLabel')}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('request.create.descriptionPlaceholder')}
                  rows={6}
                  className="text-base"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="budgetMin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold flex items-center">
                  <Wallet className="h-5 w-5 mr-2 text-primary" />
                  {t('request.create.budgetMinLabel')}
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={t('request.create.budgetMinPlaceholder')}
                    className="text-base"
                    disabled={isSubmitting}
                    value={field.value ?? ''}
                    onChange={(event) =>
                      field.onChange(event.target.value === '' ? '' : Number(event.target.value))
                    }
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="budgetMax"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  {t('request.create.budgetMaxLabel')}
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={t('request.create.budgetMaxPlaceholder')}
                    className="text-base"
                    disabled={isSubmitting}
                    value={field.value ?? ''}
                    onChange={(event) =>
                      field.onChange(event.target.value === '' ? '' : Number(event.target.value))
                    }
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="location"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-base font-semibold flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                {t('request.create.locationLabel')}
              </FormLabel>
              <FormControl>
                <CityCombobox
                  value={field.value || null}
                  onValueChange={(city) => field.onChange(city ?? '')}
                  disabled={isSubmitting}
                  placeholder={t('request.create.locationPlaceholder')}
                  searchPlaceholder={t('request.create.locationPlaceholder')}
                  searchingLabel={t('request.create.locationSearching')}
                  notFoundLabel={t('request.create.locationNotFound')}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="urgency"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                {t('request.create.urgencyLabel')}
              </FormLabel>
              <Select
                value={field.value?.toString()}
                onValueChange={(val) => field.onChange(Number(val))}
                disabled={isSubmitting}
              >
                <SelectTrigger id="urgency" className="text-base">
                  <SelectValue placeholder={t('request.create.urgencyPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  {urgencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value.toString()}>
                      {t(option.labelKey)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="itemCondition"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold flex items-center">
                <Package className="h-5 w-5 mr-2 text-primary" />
                {t('request.create.itemConditionLabel')}
              </FormLabel>
              <Select value={field.value} onValueChange={field.onChange} disabled={isSubmitting}>
                <SelectTrigger id="itemCondition" className="text-base">
                  <SelectValue placeholder={t('request.create.itemConditionPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ItemCondition.NEW}>
                    {t('request.create.itemConditionNew')}
                  </SelectItem>
                  <SelectItem value={ItemCondition.USED}>
                    {t('request.create.itemConditionUsed')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="images"
          render={() => (
            <FormItem>
              <FormLabel className="text-base font-semibold flex items-center">
                <Upload className="h-5 w-5 mr-2 text-primary" />
                {t('request.create.filesLabel')}
              </FormLabel>
              <FormControl>
                <>
                  <input
                    ref={fileInputRef}
                    id="files"
                    type="file"
                    accept={ACCEPTED_IMAGE_ACCEPT_ATTR}
                    multiple
                    className="hidden"
                    disabled={isSubmitting || displayItems.length >= MAX_IMAGES}
                    onChange={handleFilesChange}
                  />
                  <div
                    role="button"
                    tabIndex={0}
                    className={cn(
                      'border-2 border-dashed border-border rounded-lg p-8 text-center transition-colors cursor-pointer',
                      isSubmitting || displayItems.length >= MAX_IMAGES
                        ? 'opacity-60 cursor-not-allowed'
                        : 'hover:border-primary',
                    )}
                    onClick={() =>
                      !isSubmitting &&
                      displayItems.length < MAX_IMAGES &&
                      fileInputRef.current?.click()
                    }
                    onKeyDown={(e) =>
                      e.key === 'Enter' &&
                      !isSubmitting &&
                      displayItems.length < MAX_IMAGES &&
                      fileInputRef.current?.click()
                    }
                  >
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">
                      {t('request.create.filesHintPrimary')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t('request.create.filesHintSecondary')}
                    </p>
                    {displayItems.length > 0 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {displayItems.length}/{MAX_IMAGES}
                      </p>
                    )}
                  </div>
                  {displayItems.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
                      {displayItems.map((item, index) => (
                        <div
                          key={item.type === 'existing' ? item.url : `${item.url}-${index}`}
                          className="relative aspect-square rounded-lg overflow-hidden border border-border bg-muted group"
                        >
                          <Image
                            src={item.url}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, 25vw"
                            unoptimized
                          />
                          <button
                            type="button"
                            aria-label={t('request.create.filesRemove')}
                            className="absolute top-2 right-2 rounded-sm bg-destructive text-destructive-foreground p-1.5 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                            onClick={() => removeImage(index)}
                            disabled={isSubmitting}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            type="submit"
            size="lg"
            variant="gradient"
            className="text-lg shadow-glow flex-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('request.edit.submitting') : t('request.edit.submit')}
          </Button>
          {onCancel && (
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="flex-1"
              disabled={isSubmitting}
              onClick={onCancel}
            >
              {t('request.edit.cancel')}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
