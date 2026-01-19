import * as React from 'react';
import { cn } from '@/lib/utils';

export interface HeroBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string | React.ReactNode;
}

const HeroBadge = React.forwardRef<HTMLDivElement, HeroBadgeProps>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5 text-sm font-medium',
          className,
        )}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </div>
    );
  },
);

HeroBadge.displayName = 'HeroBadge';

export { HeroBadge };
