import * as React from 'react';
import { Star } from 'lucide-react';

import { cn } from '@/lib/utils';

/** П'ять зірок; заповнені — помаранчеві, порожні — сірі. Опційно числове значення. */
export function Rating({
  value,
  showValue,
  className,
}: {
  value: number;
  showValue?: boolean;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={`Rating ${value} out of 5`}
      className={cn('inline-flex items-center gap-1', className)}
    >
      <span className="inline-flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            aria-hidden
            // виміряно: зірка 12px з відступом 3px з боків; #ff5900 / #e0e6eb
            className={cn(
              'mx-[3px] size-3 first:ml-0',
              value >= i - 0.25
                ? 'fill-v2-rating text-v2-rating'
                : 'fill-v2-surface-muted text-v2-surface-muted',
            )}
          />
        ))}
      </span>
      {showValue && <span className="text-xs font-semibold text-v2-muted">{value.toFixed(1)}</span>}
    </span>
  );
}
