'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLingui } from '@lingui/react';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';

import { Button } from '@shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@shared/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/form';
import { Input } from '@shared/ui/input';
import {
  useCreateProfile,
  createProfileSchema,
  type ICreateProfileRequest,
  type IProfile,
  type ProfileType,
} from '@entities/user';

interface CreateProfileModalProps {
  type: ProfileType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: (profile: IProfile) => void;
}

export const CreateProfileModal = ({
  type,
  open,
  onOpenChange,
  onSuccess,
}: CreateProfileModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);
  const createProfileMutation = useCreateProfile();
  const typeLabel = t(`profile.type.${type}`);

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
      const profile = await createProfileMutation.mutateAsync({ ...data, type });
      toast.success(t('profile.create.success', { type: typeLabel }));
      form.reset();
      onOpenChange(false);
      onSuccess?.(profile);
    } catch {
      toast.error(t('profile.create.error'));
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
          <DialogTitle>{t(`profile.create.title.${type}`)}</DialogTitle>
          <DialogDescription>{t(`profile.create.description.${type}`)}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('profile.edit.nameLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t('profile.create.namePlaceholder')}
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
                  <FormLabel>{t('profile.create.lastNameLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value ?? ''}
                      placeholder={t('profile.create.lastNamePlaceholder')}
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
                {t('common.cancel')}
              </Button>
              <Button type="submit" disabled={createProfileMutation.isPending}>
                {createProfileMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    {t('profile.create.submitting')}
                  </>
                ) : (
                  t('profile.create.submit')
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
