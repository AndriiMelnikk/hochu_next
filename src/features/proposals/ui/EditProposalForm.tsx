'use client';

import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { DollarSign, Upload, Package } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useForm, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import type { z } from 'zod';

import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Textarea } from '@shared/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/form';
import { Label } from '@shared/ui/label';

import { ItemCondition } from '@/entities/request';
import {
  updateProposalSchema,
  type IProposalWithSeller,
  PROPOSAL_DELIVERY_TIME,
  PROPOSAL_DELIVERY_TIME_LABELS,
  PROPOSAL_WARRANTY,
  PROPOSAL_WARRANTY_LABELS,
} from '@/entities/proposal';
import { useUpdateProposal } from '@/entities/proposal/hooks/useUpdateProposal';

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

  const onSubmit = async (data: EditProposalFormValues) => {
    try {
      await updateProposal({
        price: data.price,
        title: data.title,
        description: data.description,
        estimatedTime: data.estimatedTime,
        warranty: data.warranty ?? undefined,
        itemCondition: data.itemCondition,
        images: data.images,
      });
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
                    onChange={(e) =>
                      field.onChange(e.target.value === '' ? 0 : Number(e.target.value))
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

        <div className="space-y-2">
          <Label className="text-base font-semibold flex items-center">
            <Upload className="h-4 w-4 mr-1 text-primary" />
            {t('proposal.create.imagesLabel')}
          </Label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
            <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-1">{t('proposal.create.dragDrop')}</p>
            <p className="text-xs text-muted-foreground">{t('proposal.create.imagesHint')}</p>
          </div>
        </div>

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
