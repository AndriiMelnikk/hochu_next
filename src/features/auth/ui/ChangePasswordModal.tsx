'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLingui } from '@lingui/react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@shared/ui/dialog';
import { Button } from '@shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/form';
import { Input } from '@shared/ui/input';
import {
  useChangePassword,
  changePasswordSchema,
  type IChangePasswordRequest,
} from '@entities/auth';

interface ChangePasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const ChangePasswordModal = ({
  open,
  onOpenChange,
  onSuccess,
}: ChangePasswordModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const changePasswordMutation = useChangePassword();

  const form = useForm<IChangePasswordRequest>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
  });

  useEffect(() => {
    if (open) {
      form.reset({ oldPassword: '', newPassword: '' });
    }
  }, [open, form]);

  const handleSubmit = async (data: IChangePasswordRequest) => {
    try {
      await changePasswordMutation.mutateAsync(data);
      toast.success(t('auth.changePasswordSuccess') || 'Пароль успішно змінено');
      form.reset();
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      toast.error(
        error.friendlyMessage || t('auth.changePasswordError') || 'Не вдалося змінити пароль',
      );
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) form.reset();
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('profile.security.changePassword') || 'Змінити пароль'}</DialogTitle>
          <DialogDescription>
            {t('profile.security.changePasswordDescription') ||
              'Введіть старий та новий пароль для зміни.'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('auth.oldPassword') || 'Старий пароль'}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="******"
                      disabled={changePasswordMutation.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('auth.newPassword') || 'Новий пароль'}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="******"
                      disabled={changePasswordMutation.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOpenChange(false)}
                disabled={changePasswordMutation.isPending}
              >
                {t('common.cancel') || 'Скасувати'}
              </Button>
              <Button type="submit" disabled={changePasswordMutation.isPending}>
                {changePasswordMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    {t('common.saving') || 'Збереження...'}
                  </>
                ) : (
                  t('common.save') || 'Зберегти'
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
