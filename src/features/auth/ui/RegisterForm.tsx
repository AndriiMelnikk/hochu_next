'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { registerSchema, useAuthStore, type IRegisterRequest } from '@/entities/auth';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { routes } from '@/app/router/routes';
import { toast } from 'sonner';

export const RegisterForm = () => {
  const router = useRouter();
  const { register: registerUser, isLoading } = useAuthStore();

  const form = useForm<IRegisterRequest>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { handleSubmit, setError, control } = form;

  const onSubmit = async (data: IRegisterRequest) => {
    try {
      await registerUser(data);
      toast.success('Реєстрація успішна!');
      router.push(routes.HOME);
    } catch (err: any) {
      let handledAsFieldError = false;

      // Обробка помилок полів від сервера
      if (err.response?.data) {
        const serverErrors = err.response.data.errors || err.response.data;
        if (typeof serverErrors === 'object') {
          Object.keys(serverErrors).forEach((key) => {
            // Перевіряємо, чи це поле є у нашій формі
            if (['email', 'name', 'password'].includes(key)) {
              const message = Array.isArray(serverErrors[key])
                ? serverErrors[key][0]
                : serverErrors[key];
              const errorMessage = typeof message === 'string' ? message : 'Невалідні дані';

              setError(key as any, {
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
        toast.error('Сталася помилка при реєстрації');
      }
    }
  };

  const onInvalid = (errors: any) => {
    Object.values(errors).forEach((error: any) => {
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
              <FormLabel>Ім'я</FormLabel>
              <FormControl>
                <Input placeholder="Ваше ім'я" {...field} disabled={isLoading} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} disabled={isLoading} />
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
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} disabled={isLoading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="gradient" className="w-full" disabled={isLoading}>
          {isLoading ? 'Реєстрація...' : 'Зареєструватися'}
        </Button>
      </form>
    </Form>
  );
};
