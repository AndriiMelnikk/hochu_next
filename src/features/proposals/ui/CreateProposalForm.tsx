'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { AxiosError } from 'axios';
import { DollarSign, Send, Upload, AlertCircle, Package, X, Loader2 } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FieldErrors } from 'react-hook-form';
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
  createProposalSchema,
  useCreateProposal,
  PROPOSAL_DELIVERY_TIME,
  PROPOSAL_DELIVERY_TIME_LABELS,
  PROPOSAL_WARRANTY,
  PROPOSAL_WARRANTY_LABELS,
} from '@/entities/proposal';

interface CreateProposalFormProps {
  budget: string;
  requestId: string;
  onSuccess?: () => void;
}

const MAX_PROPOSAL_IMAGES = 5;

type CreateProposalFormValues = z.infer<typeof createProposalSchema>;

export const CreateProposalForm = ({ budget, requestId, onSuccess }: CreateProposalFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  const { mutateAsync: createProposal, isPending } = useCreateProposal(requestId);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingUrls, setDeletingUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<CreateProposalFormValues>({
    resolver: zodResolver(createProposalSchema),
    defaultValues: {
      price: undefined,
      title: '',
      description: '',
      estimatedTime: undefined,
      warranty: undefined,
      itemCondition: ItemCondition.NEW,
      images: [],
    },
  });

  const { control, watch, setValue, getValues, handleSubmit } = form;
  const uploadedImages = watch('images') ?? [];

  const handleFilesChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;
    const current = getValues('images') ?? [];
    if (current.length + files.length > MAX_PROPOSAL_IMAGES) {
      toast.error(t('request.create.filesMaxError'));
      event.target.value = '';
      return;
    }
    const toUpload = Array.from(files).filter((f) => ACCEPTED_IMAGE_TYPES.includes(f.type));
    if (toUpload.length < files.length) {
      toast.error(t('request.create.filesTypeError'));
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
      toast.error(t('request.create.filesUploadError'));
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
      toast.error(t('request.create.deleteFileError'));
    } finally {
      setDeletingUrls((prev) => prev.filter((url) => url !== urlToDelete));
    }
  };

  const onSubmit = async (data: CreateProposalFormValues) => {
    try {
      await createProposal({
        price: data.price,
        title: data.title,
        description: data.description,
        estimatedTime: data.estimatedTime,
        warranty: data.warranty || undefined,
        itemCondition: data.itemCondition,
        images: data.images ?? [],
      });
      toast.success(t('proposal.create.success'));
      form.reset();
      onSuccess?.();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.error?.message || t('proposal.create.error'));
      } else {
        toast.error(t('proposal.create.error'));
      }
    }
  };

  const onInvalid = (errors: FieldErrors<CreateProposalFormValues>) => {
    console.warn('CreateProposal validation errors:', errors);
    toast.error(t('proposal.create.validation.checkFields'));
  };

  return (
    <div className="bg-gradient-primary rounded-2xl p-1 shadow-lg">
      <div className="bg-card rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <Send className="h-6 w-6 mr-2 text-primary" />
          {t('proposal.create.title')}
        </h2>
        <p className="text-muted-foreground mb-6">{t('proposal.create.subtitle')}</p>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-5">
            {/* Title */}
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
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Price */}
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
                        placeholder={t('proposal.create.budgetPlaceholder', { budget })}
                        className="text-base"
                        {...field}
                        value={field.value ?? ''}
                        onChange={(e) =>
                          field.onChange(e.target.value === '' ? undefined : Number(e.target.value))
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Item Condition */}
              <FormField
                control={form.control}
                name="itemCondition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold flex items-center">
                      <Package className="h-4 w-4 mr-1 text-primary" />
                      {t('proposal.create.itemConditionLabel')}
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-base">
                          <SelectValue
                            placeholder={t('proposal.create.itemConditionPlaceholder')}
                          />
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

            {/* Description */}
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
                      rows={8}
                      className="text-base"
                      {...field}
                    />
                  </FormControl>
                  <div className="text-sm text-muted-foreground">
                    {t('proposal.create.charsCount', { count: field.value.length })}
                  </div>
                </FormItem>
              )}
            />

            {/* Delivery details */}
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

            {/* Images */}
            <FormField
              control={control}
              name="images"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base font-semibold flex items-center">
                    <Upload className="h-5 w-5 mr-2 text-primary" />
                    {t('proposal.create.imagesLabel')}
                  </FormLabel>
                  <FormControl>
                    <>
                      <input
                        ref={fileInputRef}
                        id="proposal-files"
                        type="file"
                        accept={ACCEPTED_IMAGE_TYPES.join(',')}
                        multiple
                        className="hidden"
                        disabled={
                          isPending || isUploading || uploadedImages.length >= MAX_PROPOSAL_IMAGES
                        }
                        onChange={handleFilesChange}
                      />
                      <div
                        role="button"
                        tabIndex={0}
                        className={cn(
                          'border-2 border-dashed border-border rounded-lg p-8 text-center transition-colors cursor-pointer',
                          isUploading || isPending || uploadedImages.length >= MAX_PROPOSAL_IMAGES
                            ? 'opacity-60 cursor-not-allowed'
                            : 'hover:border-primary',
                        )}
                        onClick={() =>
                          !isUploading &&
                          !isPending &&
                          uploadedImages.length < MAX_PROPOSAL_IMAGES &&
                          fileInputRef.current?.click()
                        }
                        onKeyDown={(e) =>
                          e.key === 'Enter' &&
                          !isUploading &&
                          !isPending &&
                          uploadedImages.length < MAX_PROPOSAL_IMAGES &&
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
                            ? t('request.create.filesUploading')
                            : t('proposal.create.dragDrop')}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {t('proposal.create.imagesHint')}
                        </p>
                        {uploadedImages.length > 0 && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {uploadedImages.length}/{MAX_PROPOSAL_IMAGES}
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
                                    aria-label={t('request.create.filesRemove')}
                                    className="absolute top-2 right-2 rounded-sm bg-destructive text-destructive-foreground p-1.5 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                                    onClick={() => removeImage(index)}
                                    disabled={isPending}
                                  >
                                    <X className="h-4 w-4" />
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

            {/* Warning */}
            <div className="bg-accent/30 rounded-lg p-4 border border-accent flex items-start">
              <AlertCircle className="h-5 w-5 text-accent-foreground mr-3 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-accent-foreground">
                <p className="font-semibold mb-1">{t('proposal.create.warningTitle')}</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('proposal.create.warning1')}</li>
                  <li>{t('proposal.create.warning2')}</li>
                  <li>{t('proposal.create.warning3')}</li>
                  <li>{t('proposal.create.warning4')}</li>
                  <li>{t('proposal.create.warning5')}</li>
                </ul>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              variant="gradient"
              className="w-full text-lg shadow-glow"
              disabled={isPending}
            >
              <Send className="mr-2 h-5 w-5" />
              {isPending ? t('proposal.create.submitting') : t('proposal.create.submitButton')}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
