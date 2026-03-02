'use client';

import { useState, useRef, useEffect } from 'react';
import { useLingui } from '@lingui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { toast } from 'sonner';
import { User, MapPin, Upload, X, Check, ChevronDown } from 'lucide-react';

import { ACCEPTED_IMAGE_TYPES } from '@/shared/utils';
import { cn } from '@/lib/utils';
import { useCities } from '@/entities/location';
import { useDebounce } from '@/shared/hooks';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/shared/ui/command';
import {
  userService,
  updateProfileSchema,
  type IUser,
  type IUpdateProfileRequest,
} from '@/entities/user';
import { useAuthStore } from '@/entities/auth';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';

interface EditProfileFormProps {
  user: IUser;
  onSuccess?: () => void;
}

export const EditProfileForm = ({ user, onSuccess }: EditProfileFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { setUser } = useAuthStore();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const debouncedLocationSearch = useDebounce(locationSearch, 500);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(user.profile.avatar || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: cities = [], isLoading: isCitiesLoading } = useCities(debouncedLocationSearch);

  const form = useForm<IUpdateProfileRequest>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: user.profile.name ?? '',
      lastName: user.profile.lastName || '',
      location: user.profile.location ?? '',
      avatar: user.profile.avatar ?? '',
    },
  });

  const { handleSubmit, setError, control } = form;

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;

    const file = files[0];
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      toast.error(t('profile.edit.avatarTypeError') || 'Непідтримуваний тип файлу');
      return;
    }

    setAvatarFile(file);
    const previewUrl = URL.createObjectURL(file);
    setAvatarPreview(previewUrl);
  };

  useEffect(() => {
    return () => {
      if (avatarPreview && avatarPreview.startsWith('blob:')) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const removeAvatar = () => {
    setAvatarFile(null);
    setAvatarPreview(null);
    form.setValue('avatar', null);
  };

  const onSubmit = async (data: IUpdateProfileRequest) => {
    setIsSubmitting(true);
    try {
      let avatarUrl = user.profile.avatar;

      if (avatarFile) {
        avatarUrl = await userService.uploadAvatar(avatarFile);
      } else if (avatarPreview === null) {
        avatarUrl = null;
      }

      const payload: IUpdateProfileRequest = {
        name: data.name,
        lastName: data.lastName || '',
        location: data.location,
        avatar: avatarUrl,
      };

      const updatedUser = await userService.updateMe(payload);
      setUser(updatedUser);

      toast.success(t('profile.edit.success') || 'Профіль успішно оновлено');
      onSuccess?.();
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response?.data?.errors) {
        const serverErrors = err.response.data.errors;
        Object.keys(serverErrors).forEach((key) => {
          setError(key as keyof IUpdateProfileRequest, {
            type: 'server',
            message: serverErrors[key][0],
          });
        });
      }

      const friendlyMessage = (err as AxiosError<{ friendlyMessage: string }>).response?.data
        ?.friendlyMessage;
      toast.error(
        friendlyMessage || t('profile.edit.error') || 'Сталася помилка при оновленні профілю',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border bg-muted relative">
              {avatarPreview ? (
                <Image src={avatarPreview} alt="Avatar" fill className="object-cover" unoptimized />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <User size={40} />
                </div>
              )}
            </div>

            <button
              type="button"
              className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform"
              onClick={() => fileInputRef.current?.click()}
              disabled={isSubmitting}
            >
              <Upload size={16} />
            </button>

            {avatarPreview && (
              <button
                type="button"
                className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={removeAvatar}
                disabled={isSubmitting}
              >
                <X size={14} />
              </button>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED_IMAGE_TYPES.join(',')}
            className="hidden"
            onChange={handleAvatarChange}
          />
          <p className="text-sm text-muted-foreground">
            {t('profile.edit.avatarHint') || 'Натисніть на іконку, щоб завантажити фото'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('profile.edit.nameLabel') || "Ім'я"}</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('profile.edit.lastNameLabel') || 'Прізвище'}</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ''} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="location"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {t('profile.edit.locationLabel') || 'Місто'}
              </FormLabel>
              <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={isLocationOpen}
                      className={cn(
                        'w-full justify-between text-base font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                      disabled={isSubmitting}
                    >
                      {field.value || t('profile.edit.locationPlaceholder') || 'Оберіть місто'}
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                  <Command shouldFilter={false}>
                    <CommandInput
                      placeholder={t('profile.edit.locationSearch') || 'Пошук міста...'}
                      value={locationSearch}
                      onValueChange={setLocationSearch}
                    />
                    <CommandList>
                      {isCitiesLoading && (
                        <div className="py-6 text-center text-sm">
                          {t('profile.edit.locationSearching') || 'Пошук...'}
                        </div>
                      )}
                      {!isCitiesLoading && cities.length === 0 && locationSearch.length >= 2 && (
                        <CommandEmpty>
                          {t('profile.edit.locationNotFound') || 'Місто не знайдено'}
                        </CommandEmpty>
                      )}
                      <CommandGroup>
                        {cities.map((city) => (
                          <CommandItem
                            key={city.ref}
                            value={city.name}
                            onSelect={() => {
                              field.onChange(city.name);
                              setIsLocationOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                city.name === field.value ? 'opacity-100' : 'opacity-0',
                              )}
                            />
                            <div className="flex flex-col">
                              <span>{city.name}</span>
                              <span className="text-xs text-muted-foreground">
                                {city.mainDescription}
                              </span>
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting
            ? t('profile.edit.submitting') || 'Збереження...'
            : t('profile.edit.submit') || 'Зберегти зміни'}
        </Button>
      </form>
    </Form>
  );
};

export default EditProfileForm;
