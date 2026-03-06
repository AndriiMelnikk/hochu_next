import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'inline' | 'block' | 'full-page';
  message?: string;
  icon?: React.ReactNode;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, variant = 'block', message = 'Завантаження...', icon, ...props }, ref) => {
    const defaultIcon = <Loader2 className="h-4 w-4 animate-spin" />;
    const displayIcon = icon !== undefined ? icon : defaultIcon;

    // Full page variant: content only (Header/Footer from root layout)
    if (variant === 'full-page') {
      return (
        <div className="flex flex-col items-center justify-center py-12 min-h-[50vh]">
          {displayIcon && <div className="mb-4">{displayIcon}</div>}
          <p className={cn('text-muted-foreground', className)} {...props}>
            {message}
          </p>
        </div>
      );
    }

    // Inline variant
    if (variant === 'inline') {
      return (
        <span ref={ref} className={cn('text-muted-foreground', className)} {...props}>
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
        {displayIcon && <div className="mb-4">{displayIcon}</div>}
        <p className="text-muted-foreground">{message}</p>
      </div>
    );
  },
);

Loading.displayName = 'Loading';

export { Loading };
