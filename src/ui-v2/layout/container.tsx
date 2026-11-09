import * as React from 'react';

import { cn } from '@/lib/utils';

/** Центрований контейнер сторінки (макс. 1240px, відступи 16/24px). */
export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-[1240px] px-4 md:px-6', className)} {...props} />;
}

/** Вертикальна секція сторінки; `tone="subtle"` — сірий фон. */
export function Section({
  className,
  tone,
  ...props
}: React.HTMLAttributes<HTMLElement> & { tone?: 'subtle' }) {
  return (
    <section
      className={cn('ui-v2 py-12 md:py-16', tone === 'subtle' && 'bg-v2-surface-subtle', className)}
      {...props}
    />
  );
}
