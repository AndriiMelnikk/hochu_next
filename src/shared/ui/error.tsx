'use client';

import * as React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'inline' | 'block' | 'full-page';
  message?: string;
  icon?: React.ReactNode;
}

const Error = React.forwardRef<HTMLDivElement, ErrorProps>(
  ({ className, variant = 'block', message = 'Помилка завантаження', icon, ...props }, ref) => {
    const defaultIcon = <AlertCircle className="h-4 w-4" />;
    const displayIcon = icon !== undefined ? icon : defaultIcon;

    // Full page variant: content only (Header/Footer from root layout)
    if (variant === 'full-page') {
      return (
        <div className="flex flex-col items-center justify-center py-12 min-h-[50vh]">
          {displayIcon && <div className="mb-4 text-destructive">{displayIcon}</div>}
          <p className={cn('text-destructive', className)} {...props}>
            {message}
          </p>
        </div>
      );
    }

    // Inline variant
    if (variant === 'inline') {
      return (
        <span ref={ref} className={cn('text-destructive', className)} {...props}>
          {message}
        </span>
      );
    }

    // Block variant (default)
    return (
      <div
        ref={ref}
        className={cn('text-center py-12 flex flex-col items-center justify-center', className)}
        {...props}
      >
        {displayIcon && <div className="mb-4 text-destructive">{displayIcon}</div>}
        <p className="text-destructive">{message}</p>
      </div>
    );
  },
);

Error.displayName = 'Error';

export { Error };
