'use client';

import { FieldErrors, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authService, type IForgotPasswordRequest } from '@entities/auth';
import { z } from 'zod';
import { useMemo } from 'react';
import { Button } from '@shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@shared/ui/input';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import type { FieldError } from 'react-hook-form';

const getForgotPasswordSchema = (t: (id: string) => string) =>
  z.object({
    email: z.string().email(t('auth.validation.emailInvalid')),
  });

export const ForgotPasswordForm = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const forgotPasswordSchema = useMemo(
    () => getForgotPasswordSchema(t),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.locale],
  );

  const form = useForm<IForgotPasswordRequest>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const { handleSubmit, control } = form;
  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: IForgotPasswordRequest) => {
    try {
      await authService.forgotPassword(data);
      toast.success(t('auth.forgotPassword.messages.success'));
    } catch {
      toast.error(t('auth.forgotPassword.messages.error'));
    }
  };

  const onInvalid = (errors: FieldErrors<IForgotPasswordRequest>) => {
    Object.values(errors).forEach((error: FieldError) => {
      if (error.message) {
        toast.error(error.message as string);
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-4">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.forgotPassword.form.email.label')}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t('auth.forgotPassword.form.email.placeholder')}
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="gradient" className="w-full" disabled={isSubmitting}>
          {isSubmitting
            ? t('auth.forgotPassword.form.submit.loading')
            : t('auth.forgotPassword.form.submit.default')}
        </Button>
      </form>
    </Form>
  );
};
