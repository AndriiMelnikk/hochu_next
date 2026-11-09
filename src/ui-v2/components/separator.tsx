import * as React from 'react';

import { cn } from '@/lib/utils';

/** Горизонтальна лінія; з `children` — лінія з підписом посередині ("або"). */
export function Separator({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  if (!children) {
    return (
      <div role="separator" className={cn('h-px w-full bg-v2-border', className)} {...props} />
    );
  }
  return (
    <div role="separator" className={cn('flex items-center gap-4', className)} {...props}>
      <span className="h-px flex-1 bg-v2-border" />
      <span className="text-sm text-v2-muted">{children}</span>
      <span className="h-px flex-1 bg-v2-border" />
    </div>
  );
}
