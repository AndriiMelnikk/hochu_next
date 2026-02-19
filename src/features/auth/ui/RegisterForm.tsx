'use client';

import { FieldErrors, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { registerSchema, useAuthStore, type IRegisterRequest } from '@/entities/auth';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { routes } from '@/app/router/routes';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { useLingui } from '@lingui/react';

export const RegisterForm = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const router = useRouter();
  const { register: registerUser, isLoading } = useAuthStore();

  const form = useForm<IRegisterRequest>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      type: 'buyer',
    },
  });

  const { handleSubmit, setError, control } = form;

  const onSubmit = async (data: IRegisterRequest) => {
    try {
      await registerUser(data);
      toast.success(t('auth.register.form.success'));
      router.push(routes.HOME);
    } catch (err) {
      let handledAsFieldError = false;

      // Обробка помилок полів від сервера
      if (err.response?.data) {
        const serverErrors = err.response.data.errors || err.response.data;
        if (typeof serverErrors === 'object') {
          Object.keys(serverErrors).forEach((key) => {
            // Перевіряємо, чи це поле є у нашій формі
            if (['email', 'name', 'password', 'type'].includes(key)) {
              const message = Array.isArray(serverErrors[key])
                ? serverErrors[key][0]
                : serverErrors[key];
              const errorMessage =
                typeof message === 'string' ? message : t('auth.register.form.invalidData');

              setError(key as keyof IRegisterRequest, {
                type: 'server',
                message: errorMessage,
              });

              // Виводимо помилку поля в toast
              toast.error(errorMessage);
              handledAsFieldError = true;
            }
          });
        }
      }

      // Якщо помилка не була оброблена як помилка поля, або є загальна помилка
      if (err.friendlyMessage && !handledAsFieldError) {
        toast.error(err.friendlyMessage);
      } else if (!handledAsFieldError) {
        toast.error(t('auth.register.form.error'));
      }
    }
  };

  const onInvalid = (errors: FieldErrors<IRegisterRequest>) => {
    Object.values(errors).forEach((error) => {
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.register.form.nameLabel')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('auth.register.form.namePlaceholder')}
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.register.form.emailLabel')}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t('auth.register.form.emailPlaceholder')}
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
              <FormLabel>{t('auth.register.form.passwordLabel')}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder={t('auth.register.form.passwordPlaceholder')}
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
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.register.form.roleLabel')}</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isLoading}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t('auth.register.form.rolePlaceholder')} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="buyer">{t('auth.register.form.roleBuyer')}</SelectItem>
                  <SelectItem value="seller">{t('auth.register.form.roleSeller')}</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="gradient" className="w-full" disabled={isLoading}>
          {isLoading ? t('auth.register.form.submitting') : t('auth.register.form.submit')}
        </Button>
      </form>
    </Form>
  );
};
