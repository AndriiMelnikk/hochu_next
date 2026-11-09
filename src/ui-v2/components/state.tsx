import * as React from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';

/** Індикатор завантаження: `inline` — текст у рядку, `block` — по центру блоку. */
export function LoadingState({
  variant = 'block',
  message = 'Завантаження...',
  className,
}: {
  variant?: 'inline' | 'block';
  message?: string;
  className?: string;
}) {
  if (variant === 'inline')
    return <span className={cn('text-v2-muted', className)}>{message}</span>;
  return (
    <div
      role="status"
      className={cn('flex items-center justify-center gap-2 py-12 text-v2-muted', className)}
    >
      <Loader2 className="size-5 animate-spin" />
      {message}
    </div>
  );
}

export function ErrorState({
  variant = 'block',
  message = 'Помилка завантаження',
  className,
}: {
  variant?: 'inline' | 'block';
  message?: string;
  className?: string;
}) {
  if (variant === 'inline')
    return <span className={cn('text-v2-danger', className)}>{message}</span>;
  return (
    <div
      role="alert"
      className={cn('flex items-center justify-center gap-2 py-12 text-v2-danger', className)}
    >
      <AlertCircle className="size-5" />
      {message}
    </div>
  );
}

/** Порожній стан списку. */
export function EmptyState({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn('py-12 text-center text-v2-muted', className)}>{children}</p>;
}
