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

/** Порожній стан списку: простий текст або з іконкою, заголовком і дією. */
export function EmptyState({
  children,
  title,
  icon,
  action,
  className,
}: {
  children?: React.ReactNode;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  if (!title && !icon && !action)
    return <p className={cn('py-12 text-center text-v2-muted', className)}>{children}</p>;
  return (
    <div className={cn('flex flex-col items-center px-4 py-12 text-center', className)}>
      {icon && (
        <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-v2-surface-subtle text-v2-muted [&_svg]:size-7">
          {icon}
        </div>
      )}
      {title && <p className="mb-1 text-lg font-[550] text-v2-ink">{title}</p>}
      {children && <p className="max-w-md text-v2-muted">{children}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

/** Сірий блок-заглушка на час завантаження. */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('animate-pulse rounded-v2-sm bg-v2-surface-muted', className)} />
  );
}

/** Скелетон рядка запиту (як RequestCard variant="row"). */
export function RowSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div role="status" aria-busy="true">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex items-start gap-4 border-b border-v2-border px-4 py-8 first:border-t"
        >
          <div className="flex-1 space-y-3">
            <Skeleton className="h-3 w-1/4" />
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="size-16 shrink-0 rounded-v2-lg sm:size-28" />
        </div>
      ))}
    </div>
  );
}
