import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        'min-h-[120px] w-full rounded-v2-xl border bg-v2-surface px-4 py-2.5 text-sm font-[450] text-v2-ink',
        'placeholder:text-v2-muted transition-colors hover:border-v2-border-strong',
        'focus-visible:border-v2-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-v2-primary',
        'disabled:cursor-not-allowed disabled:bg-v2-disabled-bg disabled:text-v2-disabled-text',
        invalid ? 'border-v2-danger focus-visible:ring-v2-danger' : 'border-v2-border',
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = 'Textarea';
