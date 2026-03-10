import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'inline' | 'block' | 'full-page';
  message?: string;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, variant = 'block', message = 'Завантаження...', ...props }, ref) => {
    const defaultIcon = <Loader2 className="h-4 w-4 animate-spin" />;

    // Full page variant: content only (Header/Footer from root layout)
    if (variant === 'full-page') {
      return (
        <div className="flex flex-col items-center justify-center py-12 min-h-[50vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
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
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">{message}</p>
      </div>
    );
  },
);

Loading.displayName = 'Loading';

export { Loading };
