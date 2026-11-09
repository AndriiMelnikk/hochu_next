'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full bg-v2-surface-muted',
  {
    variants: {
      size: { sm: 'size-8', md: 'size-12', lg: 'size-[88px]' },
      /** info — світло-синя підкладка з літерою-ініціалом (клієнтський акаунт) */
      tone: { neutral: 'bg-v2-surface-muted', info: 'bg-v2-avatar-blue' },
    },
    defaultVariants: { size: 'sm', tone: 'neutral' },
  },
);

export interface AvatarProps
  extends
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size, tone, src, alt = '', fallback, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size, tone }), className)}
      {...props}
    >
      {src && <AvatarPrimitive.Image src={src} alt={alt} className="size-full object-cover" />}
      <AvatarPrimitive.Fallback
        className={cn(
          'flex size-full items-center justify-center text-sm font-semibold',
          tone === 'info' ? 'text-v2-avatar-blue-text' : 'text-v2-subtle',
        )}
      >
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  ),
);
Avatar.displayName = 'Avatar';
