import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Плаваюча кнопка-«пігулка» над контентом на мобільному (Filters в Upwork).
 * Фіксується в правому нижньому куті; на `md+` не показується.
 */
export const FloatingPill = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, type = 'button', ...props }, ref) => (
  <button
    ref={ref}
    type={type}
    className={cn(
      'ui-v2 fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex h-12 items-center gap-2 rounded-v2-pill',
      'border border-v2-border bg-v2-surface px-5 text-base font-semibold text-v2-ink shadow-v2-float md:hidden',
      'outline-none transition-[transform,background-color] duration-150 ease-v2-out active:scale-[0.97] hover:bg-v2-hover focus-visible:ring-2 focus-visible:ring-v2-primary [&_svg]:size-5',
      className,
    )}
    {...props}
  />
));
FloatingPill.displayName = 'FloatingPill';
