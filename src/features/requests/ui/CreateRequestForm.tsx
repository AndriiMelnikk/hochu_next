'use client';

import { useMemo, useRef, useState } from 'react';
import { useLingui } from '@lingui/react';
import { useForm, type FieldError, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { toast } from 'sonner';
import {
  FileText,
  DollarSign,
  MapPin,
  Clock,
  Upload,
  Check,
  ChevronDown,
  Tag,
  Package,
  X,
  Loader2,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { useCategories } from '@/entities/category';
import { useCities } from '@/entities/location';
import { useDebounce } from '@/shared/hooks';
import { MAX_IMAGES, ACCEPTED_IMAGE_TYPES } from '@/shared/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/shared/ui/command';
import {
  createRequestSchema,
  requestService,
  useRequestStore,
  ItemCondition,
  type ICreateRequestRequest,
  REQUEST_URGENCY,
  REQUEST_URGENCY_LABELS,
} from '@/entities/request';
import { routes } from '@/app/router/routes';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
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

export const CreateRequestForm = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const router = useRouter();
  const { createRequest, creating: isSubmitting } = useRequestStore();

  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

  const [locationSearch, setLocationSearch] = useState('');
  const debouncedLocationSearch = useDebounce(locationSearch, 500);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingUrls, setDeletingUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: cities = [], isLoading: isCitiesLoading } = useCities(debouncedLocationSearch);

  const form = useForm<ICreateRequestRequest>({
    resolver: zodResolver(createRequestSchema),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      budgetMin: undefined,
      budgetMax: undefined,
      location: '',
      urgency: undefined,
      itemCondition: ItemCondition.NEW,
      images: [],
    },
  });

  const { handleSubmit, setError, control, watch, setValue, getValues } = form;

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

  const onSubmit = async (data: ICreateRequestRequest) => {
    try {
      const created = await createRequest(data);
      toast.success(t('request.create.success'));
      router.push(routes.REQUEST_ID(created._id));
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
                'images',
              ].includes(key)
            ) {
              const message = Array.isArray(serverErrors[key])
                ? serverErrors[key][0]
                : serverErrors[key];
              const errorMessage =
                typeof message === 'string' ? message : t('request.create.error');
              setError(key as keyof ICreateRequestRequest, {
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
        toast.error(t('request.create.error'));
      }
    }
  };

  const onInvalid = (errors: FieldErrors<ICreateRequestRequest>) => {
    Object.values(errors).forEach((error) => {
      const fieldError = error as FieldError;
      if (fieldError?.message) {
        toast.error(fieldError.message as string);
      }
    });
  };

  const handleCategorySelect = (categoryId: string | null, onChange: (value: string) => void) => {
    if (categoryId === null) {
      setSelectedCategoryId('');
      onChange('');
      return;
    }
    setSelectedCategoryId(categoryId);
    const selected = categoriesById.get(categoryId);
    onChange(selected?._id ?? '');
  };

  const uploadedImages = watch('images') ?? [];

  const handleFilesChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;
    const current = getValues('images') ?? [];
    if (current.length + files.length > MAX_IMAGES) {
      toast.error(t('request.create.filesMaxError') || `Максимум ${MAX_IMAGES} фото`);
      event.target.value = '';
      return;
    }
    const toUpload = Array.from(files).filter((f) => ACCEPTED_IMAGE_TYPES.includes(f.type));
    if (toUpload.length < files.length) {
      toast.error(t('request.create.filesTypeError') || 'Дозволені лише JPG, PNG, WebP, GIF');
    }
    if (!toUpload.length) {
      event.target.value = '';
      return;
    }
    setIsUploading(true);
    try {
      const urls: string[] = [];
      for (const file of toUpload) {
        const url = await requestService.uploadPostImage(file);
        urls.push(url);
      }
      setValue('images', [...current, ...urls]);
    } catch {
      toast.error(t('request.create.filesUploadError') || 'Помилка завантаження фото');
    } finally {
      setIsUploading(false);
      event.target.value = '';
    }
  };

  const removeImage = async (index: number) => {
    const current = getValues('images') ?? [];
    const urlToDelete = current[index];
    if (!urlToDelete) return;

    setDeletingUrls((prev) => [...prev, urlToDelete]);

    try {
      await requestService.deleteFile(urlToDelete);
      setValue(
        'images',
        current.filter((_, i) => i !== index),
      );
    } catch {
      toast.error(t('request.create.deleteFileError') || 'Помилка видалення фото');
    } finally {
      setDeletingUrls((prev) => prev.filter((url) => url !== urlToDelete));
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-6">
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
                  <DollarSign className="h-5 w-5 mr-2 text-primary" />
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
              <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={isLocationOpen}
                      className={cn(
                        'w-full justify-between text-base font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                      disabled={isSubmitting}
                    >
                      {field.value || t('request.create.locationPlaceholder')}
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                  <Command shouldFilter={false}>
                    <CommandInput
                      placeholder={t('request.create.locationPlaceholder')}
                      value={locationSearch}
                      onValueChange={setLocationSearch}
                    />
                    <CommandList>
                      {isCitiesLoading && (
                        <div className="py-6 text-center text-sm">
                          {t('request.create.locationSearching')}
                        </div>
                      )}
                      {!isCitiesLoading && cities.length === 0 && locationSearch.length >= 2 && (
                        <CommandEmpty>{t('request.create.locationNotFound')}</CommandEmpty>
                      )}
                      <CommandGroup>
                        {cities.map((city) => (
                          <CommandItem
                            key={city.ref}
                            value={city.name}
                            onSelect={() => {
                              field.onChange(city.name);
                              setIsLocationOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                city.name === field.value ? 'opacity-100' : 'opacity-0',
                              )}
                            />
                            <div className="flex flex-col">
                              <span>{city.name}</span>
                              <span className="text-xs text-muted-foreground">
                                {city.mainDescription}
                              </span>
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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
                    accept={ACCEPTED_IMAGE_TYPES.join(',')}
                    multiple
                    className="hidden"
                    disabled={isSubmitting || isUploading || uploadedImages.length >= MAX_IMAGES}
                    onChange={handleFilesChange}
                  />
                  <div
                    role="button"
                    tabIndex={0}
                    className={cn(
                      'border-2 border-dashed border-border rounded-lg p-8 text-center transition-colors cursor-pointer',
                      isUploading || isSubmitting || uploadedImages.length >= MAX_IMAGES
                        ? 'opacity-60 cursor-not-allowed'
                        : 'hover:border-primary',
                    )}
                    onClick={() =>
                      !isUploading &&
                      !isSubmitting &&
                      uploadedImages.length < MAX_IMAGES &&
                      fileInputRef.current?.click()
                    }
                    onKeyDown={(e) =>
                      e.key === 'Enter' &&
                      !isUploading &&
                      !isSubmitting &&
                      uploadedImages.length < MAX_IMAGES &&
                      fileInputRef.current?.click()
                    }
                  >
                    {isUploading ? (
                      <Loader2 className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
                    ) : (
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    )}
                    <p className="text-muted-foreground mb-2">
                      {isUploading
                        ? t('request.create.filesUploading') || 'Завантаження…'
                        : t('request.create.filesHintPrimary')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t('request.create.filesHintSecondary')}
                    </p>
                    {uploadedImages.length > 0 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {uploadedImages.length}/{MAX_IMAGES}
                      </p>
                    )}
                  </div>
                  {uploadedImages.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
                      {uploadedImages.map((url, index) => {
                        const isDeleting = deletingUrls.includes(url);
                        return (
                          <div
                            key={`${url}-${index}`}
                            className="relative aspect-square rounded-lg overflow-hidden border border-border bg-muted group"
                          >
                            <Image
                              src={url}
                              alt=""
                              fill
                              className={cn(
                                'object-cover transition-opacity',
                                isDeleting && 'opacity-50',
                              )}
                              sizes="(max-width: 640px) 50vw, 25vw"
                              unoptimized
                            />
                            {isDeleting ? (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                              </div>
                            ) : (
                              <button
                                type="button"
                                aria-label={t('request.create.filesRemove') || 'Видалити'}
                                className="absolute top-2 right-2 rounded-sm bg-destructive text-destructive-foreground p-1.5 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                                onClick={() => removeImage(index)}
                                disabled={isSubmitting}
                              >
                                <X className="h-4 w-4 " />
                              </button>
                            )}
                          </div>
                        );
                      })}
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
            className="text-lg shadow-glow w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('request.create.submitting') : t('request.create.submitPublish')}
          </Button>
        </div>
      </form>
    </Form>
  );
};
