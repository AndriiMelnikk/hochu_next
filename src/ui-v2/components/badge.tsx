import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex h-6 items-center whitespace-nowrap rounded-v2-sm px-2 text-xs font-semibold',
  {
    variants: {
      tone: {
        neutral: 'bg-v2-surface-muted text-v2-ink',
        info: 'bg-v2-info-bg text-v2-link',
        success: 'bg-v2-hover text-v2-primary',
        warning: 'bg-[color-mix(in_srgb,var(--v2-warning)_25%,white)] text-v2-ink',
        danger: 'bg-[color-mix(in_srgb,var(--v2-danger)_10%,white)] text-v2-danger',
      },
    },
    defaultVariants: { tone: 'neutral' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

/** Короткий статус: "Off", "New", "Proposals: 5 to 10". */
export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}

/** Чіп-тег навички (Node.js, React ...). */
export function Chip({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex h-6 items-center whitespace-nowrap rounded-v2-sm bg-v2-surface-muted px-3 text-sm font-[450] text-v2-muted',
        className,
      )}
      {...props}
    />
  );
}
