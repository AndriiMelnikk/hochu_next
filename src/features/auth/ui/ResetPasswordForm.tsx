'use client';

import { FieldErrors, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { authService } from '@entities/auth';
import { Button } from '@shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@shared/ui/input';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import type { FieldError } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { routes } from '@/app/router/routes';
import { AxiosError } from 'axios';
import { useMemo } from 'react';

const getResetPasswordFormSchema = (t: (id: string) => string) =>
  z
    .object({
      newPassword: z.string().min(6, t('auth.validation.passwordMin')),
      confirmPassword: z.string().min(1, t('auth.validation.confirmPasswordRequired')),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t('auth.validation.passwordsMismatch'),
      path: ['confirmPassword'],
    });

type ResetPasswordFormData = z.infer<ReturnType<typeof getResetPasswordFormSchema>>;

interface ResetPasswordFormProps {
  token: string;
}

export const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const router = useRouter();
  const resetPasswordFormSchema = useMemo(
    () => getResetPasswordFormSchema(t),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.locale],
  );

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const { handleSubmit, control } = form;
  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      await authService.resetPassword({
        token,
        newPassword: data.newPassword,
      });
      toast.success(t('auth.resetPassword.messages.success'));
      router.push(routes.LOGIN);
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response?.status === 400) {
        const data = err.response?.data as { error?: string; message?: string };
        const code = String(data?.error ?? data?.message ?? '').toLowerCase();
        if (code.includes('invalid_reset_token')) {
          toast.error(t('auth.resetPassword.messages.invalidToken'));
          return;
        }
      }
      toast.error(t('auth.resetPassword.messages.error'));
    }
  };

  const onInvalid = (errors: FieldErrors<ResetPasswordFormData>) => {
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
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.resetPassword.form.newPassword.label')}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder={t('auth.resetPassword.form.newPassword.placeholder')}
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.resetPassword.form.confirmPassword.label')}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder={t('auth.resetPassword.form.confirmPassword.placeholder')}
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
            ? t('auth.resetPassword.form.submit.loading')
            : t('auth.resetPassword.form.submit.default')}
        </Button>
      </form>
    </Form>
  );
};
