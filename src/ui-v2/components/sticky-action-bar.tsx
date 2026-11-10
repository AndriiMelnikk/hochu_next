import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Нижня панель основних дій на мобільному («Подати пропозицію» / «Зберегти» в Upwork):
 * прилипає до низу екрана, враховує safe-area. На `lg+` не показується.
 * Додайте `StickyActionBarSpacer`, щоб остання секція не ховалась під панеллю.
 */
export function StickyActionBar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'ui-v2 fixed inset-x-0 bottom-0 z-40 flex flex-col gap-2 border-t border-v2-border bg-v2-surface px-4 pt-3 lg:hidden',
        'pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,0.04)]',
        className,
      )}
      {...props}
    />
  );
}

export function StickyActionBarSpacer({ className }: { className?: string }) {
  return <div aria-hidden className={cn('h-28 lg:hidden', className)} />;
}
