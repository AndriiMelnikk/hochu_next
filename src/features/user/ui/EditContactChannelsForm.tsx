'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import {
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Send,
  MessageCircle,
  MessageSquare,
} from 'lucide-react';

import { userService, updateContactsSchema, type IUser } from '@/entities/user';
import { useAuthStore } from '@/entities/auth';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { ContactChannel } from '@/entities/user/types/User';

interface ContactFormData {
  contacts: Partial<Record<ContactChannel, string>>;
}

interface EditContactChannelsFormProps {
  user: IUser;
  onSuccess?: () => void;
}

const CHANNEL_ICONS: Record<ContactChannel, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  phone: Phone,
  email: Mail,
  website: Globe,
  instagram: Instagram,
  facebook: Facebook,
  telegram: Send,
  viber: MessageSquare,
  whatsapp: MessageCircle,
};

const BUYER_CHANNELS: ContactChannel[] = ['phone', 'email', 'telegram'];
const SELLER_CHANNELS: ContactChannel[] = [
  'phone',
  'email',
  'telegram',
  'viber',
  'whatsapp',
  'instagram',
  'facebook',
  'website',
];

export const EditContactChannelsForm = ({ user, onSuccess }: EditContactChannelsFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { setUser } = useAuthStore();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const profileType = user.profile.type;
  const activeChannels = profileType === 'seller' ? SELLER_CHANNELS : BUYER_CHANNELS;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(updateContactsSchema),
    defaultValues: {
      contacts: activeChannels.reduce(
        (acc, channel) => {
          acc[channel] = user.profile.contacts?.[channel] ?? '';
          return acc;
        },
        {} as Record<ContactChannel, string>,
      ),
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Фільтруємо порожні значення перед відправкою
      const filteredContacts = Object.fromEntries(
        Object.entries(data.contacts || {}).filter(
          ([_, value]) => value !== '' && value !== null && value !== undefined,
        ),
      );

      const updatedProfile = await userService.updateContacts(user.profile._id, filteredContacts);

      setUser({
        ...user,
        profile: updatedProfile,
      });

      toast.success(t('profile.contacts.success') || 'Контактні дані успішно оновлено');
      onSuccess?.();
    } catch (err: unknown) {
      const friendlyMessage = (err as AxiosError<{ friendlyMessage: string }>).response?.data
        ?.friendlyMessage;
      toast.error(
        friendlyMessage || t('profile.contacts.error') || 'Сталася помилка при оновленні контактів',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeChannels.map((channel) => {
            const Icon = CHANNEL_ICONS[channel];
            return (
              <FormField
                key={channel}
                control={control}
                name={`contacts.${channel}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-primary" />
                      {t(`contact.channel.${channel}`) || channel}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ''}
                        disabled={isSubmitting}
                        placeholder={
                          t(`contact.channel.${channel}.placeholder`) ||
                          `Введіть ${t(`contact.channel.${channel}`)}`
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting
            ? t('profile.contacts.submitting') || 'Збереження...'
            : t('profile.contacts.submit') || 'Зберегти контакти'}
        </Button>
      </form>
    </Form>
  );
};

export default EditContactChannelsForm;
