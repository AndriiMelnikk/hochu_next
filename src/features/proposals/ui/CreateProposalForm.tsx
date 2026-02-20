'use client';

import { AxiosError } from 'axios';
import { DollarSign, Send, Upload, AlertCircle, Package } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FieldErrors } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Textarea } from '@shared/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/form';

import { ItemCondition } from '@/entities/request';
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

type CreateProposalFormValues = z.infer<typeof createProposalSchema>;

export const CreateProposalForm = ({ budget, requestId, onSuccess }: CreateProposalFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  const { mutateAsync: createProposal, isPending } = useCreateProposal(requestId);

  const form = useForm<CreateProposalFormValues>({
    resolver: zodResolver(createProposalSchema),
    defaultValues: {
      price: undefined,
      title: '',
      description: '',
      estimatedTime: undefined,
      warranty: undefined,
      itemCondition: ItemCondition.NEW,
    },
  });

  const onSubmit = async (data: CreateProposalFormValues) => {
    try {
      await createProposal({
        price: data.price,
        title: data.title,
        description: data.description,
        estimatedTime: data.estimatedTime,
        warranty: data.warranty || undefined,
        itemCondition: data.itemCondition,
        images: [],
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
          <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-5">
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
                  <FormMessage />
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
                    <FormMessage />
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
                    <FormMessage />
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
                  <FormMessage />
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
                    <FormMessage />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Images */}
            <div className="space-y-2">
              <div className="text-base font-semibold flex items-center">
                <Upload className="h-4 w-4 mr-1 text-primary" />
                {t('proposal.create.imagesLabel')}
              </div>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">
                  {t('proposal.create.dragDrop')}
                </p>
                <p className="text-xs text-muted-foreground">{t('proposal.create.imagesHint')}</p>
              </div>
            </div>

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
