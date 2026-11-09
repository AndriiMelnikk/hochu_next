import * as React from 'react';
import { Search } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md';
  invalid?: boolean;
  /** Показати іконку пошуку зліва */
  search?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size = 'md', invalid, search, ...props }, ref) => (
    <div className="relative w-full">
      {search && (
        <Search
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-v2-muted"
        />
      )}
      <input
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          'w-full rounded-v2-xl border bg-v2-surface text-sm font-[450] text-v2-ink',
          'placeholder:text-v2-muted transition-colors',
          'hover:border-v2-border-strong',
          'focus-visible:border-v2-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-v2-primary',
          // read-only (Job link): сірий фон, сірі рамка й текст (виміряно)
          'read-only:border-v2-subtle read-only:bg-v2-surface-muted read-only:text-v2-subtle read-only:hover:border-v2-subtle',
          'disabled:cursor-not-allowed disabled:bg-v2-disabled-bg disabled:text-v2-disabled-text disabled:hover:border-v2-border',
          invalid ? 'border-v2-danger focus-visible:ring-v2-danger' : 'border-v2-border',
          size === 'sm' ? 'h-8' : 'h-10',
          search ? 'pl-10 pr-4' : 'px-4',
          className,
        )}
        {...props}
      />
    </div>
  ),
);
Input.displayName = 'Input';
