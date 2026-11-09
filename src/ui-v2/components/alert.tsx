import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative flex w-full gap-3 rounded-v2-xl border p-4 text-sm text-v2-ink [&>svg]:mt-0.5 [&>svg]:size-5 [&>svg]:shrink-0',
  {
    variants: {
      tone: {
        neutral: 'border-v2-border bg-v2-surface-subtle',
        info: 'border-transparent bg-v2-info-bg [&>svg]:text-v2-link',
        warning:
          'border-[color-mix(in_srgb,var(--v2-warning)_50%,white)] bg-[color-mix(in_srgb,var(--v2-warning)_12%,white)] [&>svg]:text-v2-ink',
        danger:
          'border-[color-mix(in_srgb,var(--v2-danger)_30%,white)] bg-[color-mix(in_srgb,var(--v2-danger)_6%,white)] [&>svg]:text-v2-danger',
        success: 'border-transparent bg-v2-hover [&>svg]:text-v2-primary',
      },
    },
    defaultVariants: { tone: 'neutral' },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

/** Повідомлення в потоці сторінки. Іконку передавати першим дочірнім `<svg>`. */
export function Alert({ className, tone, ...props }: AlertProps) {
  return <div role="alert" className={cn(alertVariants({ tone }), className)} {...props} />;
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn('mb-1 font-semibold leading-5', className)} {...props} />;
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('text-sm leading-5 text-v2-muted', className)} {...props} />;
}
