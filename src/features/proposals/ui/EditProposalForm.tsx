'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { AxiosError } from 'axios';
import { DollarSign, Upload, Package, X } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useForm, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import type { z } from 'zod';

import { cn } from '@/lib/utils';
import { ACCEPTED_IMAGE_TYPES } from '@/shared/utils';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Textarea } from '@shared/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/form';

import { ItemCondition, requestService } from '@/entities/request';
import {
  updateProposalSchema,
  type IProposalWithSeller,
  PROPOSAL_DELIVERY_TIME,
  PROPOSAL_DELIVERY_TIME_LABELS,
  PROPOSAL_WARRANTY,
  PROPOSAL_WARRANTY_LABELS,
} from '@/entities/proposal';
import { useUpdateProposal } from '@/entities/proposal/hooks/useUpdateProposal';

const MAX_PROPOSAL_IMAGES = 5;

type EditProposalFormValues = z.infer<typeof updateProposalSchema>;

interface EditProposalFormProps {
  proposal: IProposalWithSeller;
  onSuccess: () => void;
  onCancel?: () => void;
}

export const EditProposalForm = ({ proposal, onSuccess, onCancel }: EditProposalFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);
  const { mutateAsync: updateProposal, isPending } = useUpdateProposal(
    proposal.requestId,
    proposal._id,
  );

  const [urlsToDelete, setUrlsToDelete] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<{ file: File; previewUrl: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<EditProposalFormValues>({
    resolver: zodResolver(updateProposalSchema),
    defaultValues: {
      price: proposal.price ?? 0,
      title: proposal.title ?? '',
      description: proposal.description ?? '',
      estimatedTime: proposal.estimatedTime ?? undefined,
      warranty: proposal.warranty ?? undefined,
      itemCondition: proposal.itemCondition ?? ItemCondition.NEW,
      images: proposal.images ?? [],
    },
  });

  useEffect(() => {
    form.reset({
      price: proposal.price ?? 0,
      title: proposal.title ?? '',
      description: proposal.description ?? '',
      estimatedTime: proposal.estimatedTime ?? undefined,
      warranty: proposal.warranty ?? undefined,
      itemCondition: proposal.itemCondition ?? ItemCondition.NEW,
      images: proposal.images ?? [],
    });
  }, [proposal, form]);

  const keptExistingUrls = useMemo(
    () => (proposal.images ?? []).filter((url) => !urlsToDelete.includes(url)),
    [proposal.images, urlsToDelete],
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

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;
    const currentCount = keptExistingUrls.length + newFiles.length;
    if (currentCount + files.length > MAX_PROPOSAL_IMAGES) {
      toast.error(
        t('request.create.filesMaxError') || `Максимум ${MAX_PROPOSAL_IMAGES} фото`,
      );
      event.target.value = '';
      return;
    }
    const toAdd = Array.from(files).filter((f) => ACCEPTED_IMAGE_TYPES.includes(f.type));
    if (toAdd.length < files.length) {
      toast.error(t('request.create.filesTypeError') || 'Дозволені лише JPG, PNG, WebP, GIF');
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

  const onSubmit = async (data: EditProposalFormValues) => {
    try {
      const newUrls: string[] = [];
      if (newFiles.length > 0) {
        for (const { file } of newFiles) {
          const url = await requestService.uploadPostImage(file);
          newUrls.push(url);
        }
      }
      const finalImages = [...keptExistingUrls, ...newUrls];

      await updateProposal({
        price: data.price,
        title: data.title,
        description: data.description,
        estimatedTime: data.estimatedTime,
        warranty: data.warranty ?? undefined,
        itemCondition: data.itemCondition,
        images: finalImages,
      });

      if (urlsToDelete.length > 0) {
        await Promise.all(urlsToDelete.map((url) => requestService.deleteFile(url)));
      }

      toast.success(t('proposal.edit.success'));
      onSuccess();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const msg = error.response?.data?.error?.message ?? error.response?.data?.message;
        toast.error(msg || t('proposal.edit.error'));
      } else {
        toast.error(t('proposal.edit.error'));
      }
    }
  };

  const onInvalid = (errors: FieldErrors<EditProposalFormValues>) => {
    console.warn('EditProposal validation errors:', errors);
    toast.error(t('proposal.create.validation.checkFields'));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        className="space-y-5 max-h-[70vh] overflow-y-auto pr-1 pl-1"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                {t('proposal.create.proposalTitleLabel')}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t('proposal.create.proposalTitlePlaceholder')}
                  className="text-base"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                {t('proposal.create.descriptionLabel')}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('proposal.create.descriptionPlaceholder')}
                  rows={6}
                  className="text-base"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <div className="text-sm text-muted-foreground">
                {t('proposal.create.charsCount', { count: field.value.length })}
              </div>
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold flex items-center">
                  <DollarSign className="h-4 w-4 mr-1 text-primary" />
                  {t('proposal.create.priceLabel')}
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="text-base"
                    disabled={isPending}
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
            control={form.control}
            name="itemCondition"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold flex items-center">
                  <Package className="h-4 w-4 mr-1 text-primary" />
                  {t('proposal.create.itemConditionLabel')}
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value} disabled={isPending}>
                  <FormControl>
                    <SelectTrigger className="text-base">
                      <SelectValue placeholder={t('proposal.create.itemConditionPlaceholder')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={ItemCondition.NEW}>
                      {t('proposal.create.itemConditionNew')}
                    </SelectItem>
                    <SelectItem value={ItemCondition.USED}>
                      {t('proposal.create.itemConditionUsed')}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="estimatedTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  {t('proposal.create.deliveryTimeLabel')}
                </FormLabel>
                <Select
                  onValueChange={(val) => field.onChange(Number(val))}
                  value={field.value?.toString()}
                  disabled={isPending}
                >
                  <FormControl>
                    <SelectTrigger className="text-base">
                      <SelectValue placeholder={t('proposal.create.deliveryTimePlaceholder')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(PROPOSAL_DELIVERY_TIME).map((value) => (
                      <SelectItem key={value} value={value.toString()}>
                        {t(PROPOSAL_DELIVERY_TIME_LABELS[value])}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="warranty"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  {t('proposal.create.warrantyLabel')}
                </FormLabel>
                <Select
                  onValueChange={(val) => field.onChange(Number(val))}
                  value={field.value?.toString()}
                  disabled={isPending}
                >
                  <FormControl>
                    <SelectTrigger className="text-base">
                      <SelectValue placeholder={t('proposal.create.warrantyPlaceholder')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(PROPOSAL_WARRANTY).map((value) => (
                      <SelectItem key={value} value={value.toString()}>
                        {t(PROPOSAL_WARRANTY_LABELS[value])}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="images"
          render={() => (
            <FormItem>
              <FormLabel className="text-base font-semibold flex items-center">
                <Upload className="h-4 w-4 mr-1 text-primary" />
                {t('proposal.create.imagesLabel')}
              </FormLabel>
              <FormControl>
                <>
                  <input
                    ref={fileInputRef}
                    id="proposal-edit-files"
                    type="file"
                    accept={ACCEPTED_IMAGE_TYPES.join(',')}
                    multiple
                    className="hidden"
                    disabled={isPending || displayItems.length >= MAX_PROPOSAL_IMAGES}
                    onChange={handleFilesChange}
                  />
                  <div
                    role="button"
                    tabIndex={0}
                    className={cn(
                      'border-2 border-dashed border-border rounded-lg p-6 text-center transition-colors cursor-pointer',
                      isPending || displayItems.length >= MAX_PROPOSAL_IMAGES
                        ? 'opacity-60 cursor-not-allowed'
                        : 'hover:border-primary',
                    )}
                    onClick={() =>
                      !isPending &&
                      displayItems.length < MAX_PROPOSAL_IMAGES &&
                      fileInputRef.current?.click()
                    }
                    onKeyDown={(e) =>
                      e.key === 'Enter' &&
                      !isPending &&
                      displayItems.length < MAX_PROPOSAL_IMAGES &&
                      fileInputRef.current?.click()
                    }
                  >
                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">
                      {t('proposal.create.dragDrop')}
                    </p>
                    <p className="text-xs text-muted-foreground">{t('proposal.create.imagesHint')}</p>
                    {displayItems.length > 0 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {displayItems.length}/{MAX_PROPOSAL_IMAGES}
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
                            aria-label={t('request.create.filesRemove') || 'Видалити'}
                            className="absolute top-2 right-2 rounded-sm bg-destructive text-destructive-foreground p-1.5 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                            onClick={() => removeImage(index)}
                            disabled={isPending}
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
            disabled={isPending}
          >
            {isPending ? t('proposal.edit.submitting') : t('proposal.edit.submit')}
          </Button>
          {onCancel && (
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="flex-1"
              disabled={isPending}
              onClick={onCancel}
            >
              {t('proposal.edit.cancel')}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
