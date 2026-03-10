'use client';

import { FieldError, FieldErrors, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@entities/auth/schemas/authSchema';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { useAuthStore } from '@entities/auth/store/authStore';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ILoginRequest } from '@/entities/auth';
import { routes } from '@/app/router/routes';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { AxiosError } from 'axios';
import { useLingui } from '@lingui/react';

export const LoginForm = () => {
  const router = useRouter();
  const { login: loginUser, isLoading } = useAuthStore();
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const form = useForm<ILoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit, setError, control } = form;

  const onSubmit = async (data: ILoginRequest) => {
    try {
      await loginUser(data);
      toast.success(t('auth.login.messages.success'));
      router.push(routes.HOME);
    } catch (err: unknown) {
      let handledAsFieldError = false;

      // Обробка помилок полів від сервера
      if (
        err instanceof AxiosError &&
        err.response?.data &&
        typeof err.response.data === 'object'
      ) {
        const serverErrors = err.response.data.errors || err.response.data;
        if (typeof serverErrors === 'object') {
          Object.keys(serverErrors).forEach((key) => {
            // Перевіряємо, чи це поле є у нашій формі
            if (['email', 'password'].includes(key)) {
              const message = Array.isArray(serverErrors[key])
                ? serverErrors[key][0]
                : serverErrors[key];
              const errorMessage =
                typeof message === 'string' ? message : t('auth.login.messages.invalidData');
              setError(key as keyof ILoginRequest, {
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

      const friendlyMessage = (err as unknown as { friendlyMessage: string }).friendlyMessage;
      if (friendlyMessage && !handledAsFieldError) {
        toast.error(friendlyMessage);
      } else if (!handledAsFieldError) {
        toast.error(t('auth.login.messages.error'));
      }
    }
  };

  const onInvalid = (errors: FieldErrors<ILoginRequest>) => {
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
              <FormLabel>{t('auth.login.form.email.label')}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t('auth.login.form.email.placeholder')}
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.login.form.password.label')}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder={t('auth.login.form.password.placeholder')}
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="gradient" className="w-full" disabled={isLoading}>
          {isLoading ? t('auth.login.form.submit.loading') : t('auth.login.form.submit.default')}
        </Button>
      </form>
    </Form>
  );
};
