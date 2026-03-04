'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
  useCreateProfile,
  createProfileSchema,
  type ICreateProfileRequest,
  type ProfileType,
} from '@/entities/user';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';

const PROFILE_TYPE_LABELS: Record<ProfileType, string> = {
  buyer: 'Покупець',
  seller: 'Продавець',
};

interface CreateProfileModalProps {
  type: ProfileType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const CreateProfileModal = ({
  type,
  open,
  onOpenChange,
  onSuccess,
}: CreateProfileModalProps) => {
  const createProfileMutation = useCreateProfile();

  const form = useForm<ICreateProfileRequest>({
    resolver: zodResolver(createProfileSchema),
    defaultValues: {
      name: '',
      lastName: '',
      type,
    },
  });

  useEffect(() => {
    if (open) {
      form.reset({ name: '', lastName: '', type });
    }
  }, [open, type, form]);

  const handleSubmit = async (data: ICreateProfileRequest) => {
    try {
      await createProfileMutation.mutateAsync({ ...data, type });
      toast.success(`Профіль типу "${PROFILE_TYPE_LABELS[type]}" створено`);
      form.reset();
      onOpenChange(false);
      onSuccess?.();
    } catch {
      toast.error('Не вдалося створити профіль');
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
          <DialogTitle>Створити профіль {PROFILE_TYPE_LABELS[type].toLowerCase()}</DialogTitle>
          <DialogDescription>
            Ви зможете використовувати цей профіль для{' '}
            {type === 'buyer'
              ? 'створення запитів та замовлення послуг'
              : 'надсилання пропозицій та виконання замовлень'}
            .
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ім&apos;я</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Введіть ім'я"
                      disabled={createProfileMutation.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Прізвище (необов&apos;язково)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value ?? ''}
                      placeholder="Введіть прізвище"
                      disabled={createProfileMutation.isPending}
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
                disabled={createProfileMutation.isPending}
              >
                Скасувати
              </Button>
              <Button type="submit" disabled={createProfileMutation.isPending}>
                {createProfileMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Створення...
                  </>
                ) : (
                  'Створити'
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
